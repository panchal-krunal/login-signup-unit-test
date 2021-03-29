import { shallow } from "enzyme";
import Input from './'

const setup = ({
    value,
    type,
    onChange
}) => shallow(<Input value={value} type={type} onChange={onChange} />)

describe('input tests', () => {
    it('renders input', () => {
        let mockOnChangeFn = jest.fn()
        let wrapper = setup('test', 'text', mockOnChangeFn);
        let inputComponent = wrapper.find('[data-test="input-component"]');
        expect(inputComponent.length).toBe(1)
    })
})