import Form from "@/components/Form";
import Table from "@/components/Table";
import Thead from "@/components/Thead";
import Th from "@/components/Th";
import Tr from "@/components/Tr";
import Tbody from "@/components/Tbody";
import Td from "@/components/Td";
import { useState } from "react";
import Mensagem from "@/components/Mensage";
import styles from '@/styles/Home.module.scss'

export default function Home() {
  const [mensagem, setMensagem] = useState(false);
  const [mensagemErro, setMensagemErro] = useState(false);
  const [reservas, setReservas] = useState([]);
  const [formValues, setFormValues] = useState({
    descricao: "",
    solicitante: "",
    sala: "",
    inicio: "",
    fim: "",
    termos: false,
  });

  const handleDescricaoChange = (e) => {
    setFormValues({ ...formValues, descricao: e.target.value });
  };

  const handleSolicitanteChange = (e) => {
    setFormValues({ ...formValues, solicitante: e.target.value });
  };

  const handleSalaChange = (e) => {
    setFormValues({ ...formValues, sala: e.target.value });
  };

  const handleInicioChange = (e) => {
    setFormValues({ ...formValues, inicio: e.target.value });
  };

  const handleFimChange = (e) => {
    setFormValues({ ...formValues, fim: e.target.value });
  };

  const handleTermosChange = (e) => {
    setFormValues({ ...formValues, termos: e.target.checked });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      !formValues.descricao ||
      !formValues.solicitante ||
      !formValues.termos
    ) {
      setMensagemErro(true);
      setTimeout(() => {
        setMensagemErro(false);
      }, 2000);
      return;
    }
    const novaReserva = {
      descricao: formValues.descricao,
      solicitante: formValues.solicitante,
      sala: formValues.sala,
      inicio: formValues.inicio,
      fim: formValues.fim,
      termos: formValues.termos,
    };
    setReservas([...reservas, novaReserva]);
    setMensagem(true);
    setTimeout(() => {
      setMensagem(false);
    }, 2000);
    setFormValues({
      descricao: "",
      solicitante: "",
      sala: "",
      inicio: "",
      fim: "",
      termos: false,
    });
  };

  function formatarData(data) {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
  
    const dataFormatada = new Date(data).toLocaleDateString('pt-BR', options);
    
    
    return dataFormatada.replace(",", "").replace(" ", " às ");
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}       >
          <div className={styles.contant_reserva}>
            <div className={styles.content_sala}>
              <label>Reservar Sala</label>
            </div>
            {mensagemErro && (
              <Mensagem type="error">Preencha todos os campos!</Mensagem>
            )}
            {mensagem && (
              <Mensagem type="success">
                Agendamento realizado com sucesso!
              </Mensagem>
            )}
          </div>
          <Form
            onSubmit={handleFormSubmit}
            value={formValues}
            onChange={{
              descricao: handleDescricaoChange,
              solicitante: handleSolicitanteChange,
              sala: handleSalaChange,
              inicio: handleInicioChange,
              fim: handleFimChange,
              termos: handleTermosChange,
            }}
          />
        </div>
        <hr />
        <div className={styles.content_tabela}>
          <label> 📆 Reservas Realizadas: {reservas.length}</label>
          <Table>
            <Thead>
              <Tr>
                <Th>Descrição</Th>
                <Th>Solicitante</Th>
                <Th>Sala</Th>
                <Th>Início</Th>
                <Th>Fim</Th>
              </Tr>
            </Thead>
            {reservas?.map((reserva, index) => (
              <Tbody key={index}>
                <Tr>
                  <Td>{reserva.descricao}</Td>
                  <Td>{reserva.solicitante}</Td>
                  <Td>{reserva.sala}</Td>
                  <Td>{formatarData(reserva.inicio)}</Td>
                  <Td>{formatarData(reserva.fim)}</Td>
                </Tr>
              </Tbody>
            ))}
          </Table>
        </div>
      </div>
    </>
  );
}
