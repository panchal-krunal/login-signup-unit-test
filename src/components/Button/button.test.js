import { shallow } from "enzyme";
import Button from './'

const setup = ({
    buttonText, onClick
}) => shallow(<Button onClick={onClick} buttonText={buttonText} />)

describe('button tests', () => {
    it('renders button', () => {
        let mockOnClick = jest.fn()
        let wrapper = setup('Submit', mockOnClick);
        let buttonComponent = wrapper.find('[data-test="button-component"]');
        expect(buttonComponent.length).toBe(1)
    })
})