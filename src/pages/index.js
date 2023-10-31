import Container from "@/components/Container";
import Form from "@/components/Form";
import Header from "@/components/Header";
import Table from "@/components/Table";
import Thead from "@/components/Thead";
import Th from "@/components/Th";
import Tr from "@/components/Tr";
import Tbody from "@/components/Tbody";
import Td from "@/components/Td";
import { useState } from "react";

export default function Home() {
  const [reservas, setReservas] = useState([]);
  const [descricao, setDescricao] = useState("");
  const [solicitante, setSolicitante] = useState("");
  const [sala, setSala] = useState("1");
  const [inicio, setInicio] = useState("");
  const [fim, setFim] = useState("");
  const [termos, setTermos] = useState(false);


  return (
    <>
      <Header>Reserva de Salas</Header>
      <div style={{ display: 'flex', height: '880px' }}>
        <div style={{
          margin: '10px',
          width: '30%',
        }}>
          <div style={{ marginBottom: '190px' }}>
            <div style={{
              margin: '10px',
            }}>
              <label>Reservar Sala</label>
            </div>
          </div>
          <Form onClick={(e) => {
            e.preventDefault();
            const novaReserva = {
              descricao,
              solicitante,
              sala,
              inicio,
              fim,
              termos
            };
            setReservas([...reservas, novaReserva]);
            setDescricao("");
            setSolicitante("");
            setSala("1");
            setInicio("");
            setFim("");
            setTermos(false);
          }}
            onChange={(e) => {
              const novaDescricao = e.target.value;
              setDescricao(novaDescricao);
            }
            }
          />
        </div>
        <hr />
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          margin: '10px',
          width: '70%',
        }}>
          <label>Reservas Realizadas: {reservas.length}</label>
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
                  <Td>{reserva.inicio}</Td>
                  <Td>{reserva.fim}</Td>
                </Tr>
              </Tbody>
            ))}
          </Table>
        </div>
      </div>
    </>
  );
}
