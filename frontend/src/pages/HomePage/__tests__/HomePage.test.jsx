import { http, HttpResponse, delay } from 'msw';
import { setupServer } from 'msw/node';
import userEvent from '@testing-library/user-event';
import i18next from '../../../utils/i18n';
import { render, screen, waitFor, within } from '../../../utils/helpers/test-utils';
import HomePage from '../HomePage';
import trendingsResultPage1 from '../../../__mocks__/HomePage/trendings_page1';
import trendingsResultPage2 from '../../../__mocks__/HomePage/trendings_page2';

export const handlers = [
  http.get(`/trending/all/week`, async () => {
    await delay(150);

    return HttpResponse.json(trendingsResultPage1);
  }),
];

const server = setupServer(...handlers);

// const mockUseNavigate = vi.fn();

// vi.mock('react-router-dom', async () => {
//   const module = await vi.importActual('react-router-dom');
//   return {
//     ...module,
//     useNavigate: () => mockUseNavigate,
//   };
// });

vi.mock('../../../utils/hoc/AuthContextProvider', () => ({
  useAuthContext: () => ({ user: null, signIn: vi.fn(), logout: vi.fn() }),
}));

// vi.mock('react-redux', async () => {
//   const module = await vi.importActual('react-redux');
//   return {
//     ...module,
//     useSelector: vi.fn(),
//     useDispatch: () => vi.fn(),
//   };
// });

describe('<HomePage />', () => {
  let container;

  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  it('should fetch trendings data and display it', async () => {
    render(<HomePage />);
    // Loader - to be in the document while fetching data
    expect(screen.getByTestId('loader')).toBeInTheDocument();

    await screen.findByTestId('items-container');

    // Loader shouldn't to be in the document
    expect(screen.queryByTestId('loader')).not.toBeInTheDocument();

    // Amount of the elements on the scrren should be equal to results length
    const container = screen.getByTestId('items-container');
    expect(container.children.length).toEqual(trendingsResultPage1.results.length);

    // Titles of all elements should be in the document
    for (let i = 0; i < trendingsResultPage1.results.length; i++) {
      const title = trendingsResultPage1.results[i].title || trendingsResultPage1.results[i].name;
      expect(within(container).getByText(title)).toBeInTheDocument();
    }

    // Load More button should be in the document
    expect(screen.getByRole('button', { name: i18next.t('loadMore') })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: i18next.t('loadMore') })).not.toBeDisabled();

    // Page title should be in the document
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(i18next.t('popular'));
  });

  it('should handle server error', async () => {
    server.use(
      http.get(`/trending/all/week`, async () => {
        await delay(150);
        return HttpResponse('Not found', {
          status: 404,
          headers: {
            'Content-Type': 'text/plain',
          },
        });
      }),
    );
    render(<HomePage />);

    // Loader - to be in the document while fetching data
    expect(screen.getByTestId('loader')).toBeInTheDocument();

    await screen.findByTestId('error');

    // Loader - not to be in the document
    expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
    // Load More button shouldn't be in the document
    expect(screen.queryByRole('button', { name: i18next.t('loadMore') })).not.toBeInTheDocument();

    // Page title should be in the document
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(i18next.t('popular'));
    // Error message should be in the document
    expect(screen.getByTestId('error')).toBeInTheDocument();
    expect(screen.getByTestId('error')).toHaveTextContent(i18next.t('errorMessage'));
  });

  it('should load next page by click on Load more button and display new data on the screen', async () => {
    render(<HomePage />);
    await screen.findByTestId('pagination-btn');

    server.use(
      http.get(`/trending/all/week`, async () => {
        await delay(150);
        return HttpResponse.json(trendingsResultPage2);
      }),
    );

    const element = screen.getByRole('button', { name: i18next.t('loadMore') });
    const user = userEvent.setup();

    await user.click(element);

    // Loader should be in the document
    expect(screen.getByTestId('loader')).toBeInTheDocument();

    await screen.findByText(trendingsResultPage2.results[0].title);

    // Loader shouldn't be in the document
    expect(screen.queryByTestId('loader')).not.toBeInTheDocument();

    // Amount of the elements on the scrren should be equal to results length
    const container = screen.getByTestId('items-container');
    const itemsAmount = trendingsResultPage1.results.length + trendingsResultPage2.results.length;
    expect(container.children.length).toEqual(itemsAmount);

    // Titles of all elements from trendingsResultPage1 should be in the document
    for (let i = 0; i < trendingsResultPage1.results.length; i++) {
      const title = trendingsResultPage1.results[i].title || trendingsResultPage1.results[i].name;
      expect(within(container).getByText(title)).toBeInTheDocument();
    }

    // Titles of all elements from trendingsResultPage2 should be in the document
    for (let i = 0; i < trendingsResultPage2.results.length; i++) {
      const title = trendingsResultPage2.results[i].title || trendingsResultPage2.results[i].name;
      expect(within(container).getByText(title)).toBeInTheDocument();
    }

    // Load More button should be in the document
    expect(screen.getByRole('button', { name: i18next.t('loadMore') })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: i18next.t('loadMore') })).not.toBeDisabled();

    // Page title should be in the document
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(i18next.t('popular'));
  });

  it('should navigate to Movie Details page by clicking on movie item', async () => {
    render(<HomePage />);

    await screen.findByTestId('items-container');

    // HomePage should have path "/"
    expect(window.location.pathname).toEqual('/');

    const container = screen.getByTestId('items-container');

    const title = trendingsResultPage1.results[0].title || trendingsResultPage1.results[0].name;
    const movieItem = within(container).getByText(title);
    const user = userEvent.setup();

    await user.click(movieItem);
    const newPath = `/${trendingsResultPage1.results[0].media_type}/${trendingsResultPage1.results[0].id}`;

    // After click on item should navigate to a new page with path "/type/id"
    expect(window.location.pathname).toEqual(newPath);
  });
});
