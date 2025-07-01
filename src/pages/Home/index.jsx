import { useRef } from 'react'
import api from '../../services/api'
import {
  Title,
  Container,
  Form,
  ContainerInputs,
  Input,
  InputLabel,

} from './styles'

import Button  from '../../components/button'
import TopBackground from '../../components/TopBackground'

function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function registerNewUser() {
    await api.post('/usuários', {
      email: inputEmail.current.value,
      name: inputName.current.value,
      age:  parseInt (inputAge.current.value)
    })
    
  }
  return (
    <Container>
      <TopBackground/>
      <Form>
        <Title>Cadastrar Usuário</Title>

        <ContainerInputs>

          <div>
            <InputLabel>
              Nome<span> *</span>
            </InputLabel>
            <Input type='text' placeholder='Nome do usuário' ref={inputName} />
          </div>

          <div>
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <Input type='number' placeholder='Idade do usuário' ref={inputAge} />
          </div>

        </ContainerInputs>


        <div style={{ width: '100%' }}>
          <InputLabel>
            E-mail<span> *</span>
          </InputLabel>
          <Input type='email' placeholder='E-mail do usuário' ref={inputEmail} />

        </div>
        <Button type='button' onClick={registerNewUser}>Cadastrar Usuário</Button>
      </Form>
    </Container>
  )
}

export default Home

