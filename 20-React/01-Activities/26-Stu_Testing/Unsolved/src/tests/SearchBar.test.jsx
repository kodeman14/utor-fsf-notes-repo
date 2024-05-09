import pretty from 'pretty';
import { render } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

describe('SearchBar', () => {
  // In this example, we render the SearchBar component and format the rendered HTML using the pretty package before saving it as a snapshot
  it('should render and match snapshot', () => {
    act(() => {
      // Render the component
      render(<SearchBar />, container);
    });

    // Format the rendered output
    const html = pretty(container.innerHTML);

    // Verify the output
    expect(html).toMatchSnapshot();
  });
});
