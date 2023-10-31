import Container from "../Container";
import styles from "./styles.module.scss";

export default function Form({
  children,
  onClick,
  onChange,
  onSubmit,
  value,
  ...props
}) {


  return (
    <Container>
      <form onSubmit={onSubmit} {...props}>
        <div className={styles.content}>
          <label htmlFor="descricao">Descrição</label>
          <textarea
            id="descricao"
            value={value.descricao}
            name="descricao"
            onChange={onChange.descricao}
          />
        </div>
        <div className={styles.content}>
          <label htmlFor="solicitante">Solicitante</label>
          <input
            type="text"
            id="solicitante"
            value={value.solicitante}
            name="solicitante"
            onChange={onChange.solicitante}
            placeholder="Digite seu Nome"           
          />
        </div>
        <div className={styles.content}>
          <label htmlFor="sala">Sala</label>
          <select
            id="sala"
            name="sala"
            value={value.sala}
            onChange={onChange.sala}
          >
            <option value="" disabled >
                ... Selecione uma sala
            </option>
            <option value="Bloco A - Lab. de Informática 1">
              Bloco A - Lab. de Informática 1
            </option>
            <option value="Bloco A - Lab. de Informática 2">
              Bloco A - Lab. de Informática 2
            </option>
            <option value="Bloco A - Lab. de Informática 3">
              Bloco A - Lab. de Informática 3
            </option>
          </select>
        </div>
        <div className={styles.content}>
          <label>Inicio</label>
          <input
            type="datetime-local"
            value={value.inicio}
            onChange={onChange.inicio}
          />
        </div>
        <div className={styles.content}>
          <label>Fim</label>
          <input
            type="datetime-local"
            value={value.fim}
            onChange={onChange.fim}
          />
        </div>
        <div className={styles.checkBox}>
          <input
            type="checkbox"
            value={value.termos}
            onChange={onChange.termos}
          />
          <label>concordo com os termos ?</label>
        </div>
        <div className={styles.content_button}>
          <button onClick={onClick}>Reservar sala</button>
        </div>
      </form>
      {children}
    </Container>
  );
}
