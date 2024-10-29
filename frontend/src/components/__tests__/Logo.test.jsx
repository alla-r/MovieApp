import userEvent from '@testing-library/user-event';
import { render, screen } from '../../utils/helpers/test-utils';
import Logo from '../Logo/Logo';

describe('<Logo />', () => {
  let container;
  const mockHandler = vi.fn();

  beforeEach(() => {
    container = render(<Logo onClickHandler={mockHandler} />).container;
  });

  it('should be defined', () => {
    expect(container).toBeDefined();
  });

  it('should have MovieAPP text content', () => {
    expect(container).toHaveTextContent('MovieAPP');
  });

  it('should call onClickHandler after clicking on logo', async () => {
    // screen.debug(container);
    const user = userEvent.setup();
    const element = screen.getByTestId('logo-container');
    await user.click(element);

    // console.log(mockHandler.mock);

    expect(mockHandler.mock.calls).toHaveLength(1);
  });
});
