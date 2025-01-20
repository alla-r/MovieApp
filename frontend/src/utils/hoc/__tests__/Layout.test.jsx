import userEvent from '@testing-library/user-event';
import i18next from '../../i18n';
import { render, screen } from '../../helpers/test-utils';
import { useAuthContext } from '../AuthContextProvider';
import withLayout from '../Layout';

vi.mock('../AuthContextProvider', () => ({
  useAuthContext: vi.fn(),
}));

function DummyComponent() {
  return <div>Content</div>;
}

const WrappedComponent = withLayout(DummyComponent);

describe('HOC withLayout', () => {
  it('should render Header with options for unauthorized user', async () => {
    useAuthContext.mockImplementationOnce(() => ({ user: null, signIn: vi.fn(), logout: vi.fn() }));
    render(<WrappedComponent />);

    await screen.findByText('Content');

    expect(screen.getByText(i18next.t('login'))).toBeInTheDocument();
    expect(screen.queryByText(i18next.t('watchlist'))).not.toBeInTheDocument();
    expect(screen.queryByText(i18next.t('favorites'))).not.toBeInTheDocument();
    expect(screen.queryByText(i18next.t('ratings'))).not.toBeInTheDocument();
    expect(screen.queryByText(i18next.t('logout'))).not.toBeInTheDocument();
  });

  it('should navigate to Login screen by clicking on Login menu item', async () => {
    const signInMock = vi.fn();
    useAuthContext.mockImplementation(() => ({
      user: null,
      signIn: signInMock,
      logout: vi.fn(),
    }));

    render(<WrappedComponent />);
    await screen.findByText(i18next.t('login'));

    const loginItem = screen.getByText(i18next.t('login'));
    const user = userEvent.setup();
    await user.click(loginItem);

    expect(window.location.pathname).toEqual('/auth/login');
  });

  it('should render Header with options for authorized user', async () => {
    useAuthContext.mockImplementationOnce(() => ({
      user: 'user-token-test',
      signIn: vi.fn(),
      logout: vi.fn(),
    }));
    render(<WrappedComponent />);

    await screen.findByText('Content');

    expect(screen.queryByText(i18next.t('login'))).not.toBeInTheDocument();
    expect(screen.getByText(i18next.t('watchlist'))).toBeInTheDocument();
    expect(screen.getByText(i18next.t('favorites'))).toBeInTheDocument();
    expect(screen.getByText(i18next.t('ratings'))).toBeInTheDocument();
    expect(screen.getByText(i18next.t('logout'))).toBeInTheDocument();
  });

  it('should call logout method by clicking on Logout menu item', async () => {
    const logoutMock = vi.fn();
    useAuthContext.mockImplementation(() => ({
      user: 'test',
      signIn: vi.fn(),
      logout: logoutMock,
    }));

    render(<WrappedComponent />);
    await screen.findByText(i18next.t('logout'));

    const logoutItem = screen.getByText(i18next.t('logout'));
    const user = userEvent.setup();
    await user.click(logoutItem);

    expect(logoutMock).toHaveBeenCalled();
  });
});
