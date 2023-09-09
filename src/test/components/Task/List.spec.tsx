import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TaskList from '../../../components/Task/List';

describe('TaskList Component', () => {
    it('should render list' , () => {
        const {  getByText } = render(<TaskList initialValues={['Bruno', 'Monica', 'Luisa', 'Bruna']} />)

        const btnAdd = getByText('Adicionar')

        userEvent.click(btnAdd)

        expect(getByText('Bruno')).toBeInTheDocument()
        expect(getByText('Monica')).toBeInTheDocument()
        expect(getByText('Luisa')).toBeInTheDocument()
        expect(getByText('Bruna')).toBeInTheDocument()

    });
    
    it('should be able add a new item into the list' , async () => {
        const { getByText, getByPlaceholderText } = render(<TaskList initialValues={[]} />)
        
        const inputElement = getByPlaceholderText('Novo Item')
        const btnAdd = getByText('Adicionar')

        await userEvent.type(inputElement , 'Miguel')
        await userEvent.click(btnAdd)

        expect(getByText('Miguel')).toBeInTheDocument()
        

    });

    it('should be not allowed add a new item with the same value' , async () => {
        const {  getByText , getByPlaceholderText, getAllByText } = render(<TaskList initialValues={['Bruno', 'Monica', 'Luisa', 'Bruna']}/>)

        expect(getByText('Bruno')).toBeInTheDocument()
        expect(getByText('Monica')).toBeInTheDocument()
        expect(getByText('Luisa')).toBeInTheDocument()
        expect(getByText('Bruna')).toBeInTheDocument()

        const btnAdd = getByText('Adicionar')
        const inputElement = getByPlaceholderText('Novo Item')

        await userEvent.type(inputElement , 'Bruno')
        await userEvent.click(btnAdd)

        expect(getByText('Bruno')).toBeInTheDocument()
        expect(getByText('Monica')).toBeInTheDocument()
        expect(getByText('Luisa')).toBeInTheDocument()
        expect(getByText('Bruna')).toBeInTheDocument()
        expect(getAllByText('Bruno')).toHaveLength(1)
    })

    it('should be allowed remove a new item from the list' , async () => {
        
        const {  getByText, 
                queryByText, 
                 getAllByText } = render(<TaskList initialValues={['Bruno', 'Monica', 'Luisa', 'Bruna']}/>)

        const removeButtons = getAllByText('Remover')
        await userEvent.click(removeButtons[1])

        expect(getByText('Bruno')).toBeInTheDocument()
        expect(getByText('Luisa')).toBeInTheDocument()
        expect(getByText('Bruna')).toBeInTheDocument()
        expect(queryByText('Monica')).not.toBeInTheDocument()
    })
})