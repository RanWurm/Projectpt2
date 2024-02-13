import { render, fireEvent } from '@testing-library/react';
import Button from './Button';
import App from '..';

describe('Button Component', () => {
  it('should open the meme video when the button is clicked and meme is true', () => {
    const openSpy = jest.spyOn(window, 'open');
    const { getByAltText } = render(<Button id="test-button" icon="test-icon.png" meme="true" />);
    const button = getByAltText('Button Icon');
    fireEvent.click(button);
    expect(openSpy).toHaveBeenCalledWith('https://www.youtube.com/watch?v=IEKeg_2oJFI', '_blank');
    openSpy.mockRestore();
  });

  // other tests go here
});