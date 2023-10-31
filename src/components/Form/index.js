import { useState } from 'react';
import Container from '../Container';
import styles from './styles.module.css';

export default function Form({ children, onClick, onChange, value }) {
    return (
        <Container>
            <form>
                <div className={styles.content}>
                    <label htmlFor='descricao'>Descrição</label>
                    <textarea
                        id='descricao'
                        value={value}
                        name='descricao'
                        onChange={onChange} />
                </div>
                <div className={styles.content}>
                    <label htmlFor='solicitante'>Solicitante</label>
                    <input type="text"
                        id='solicitante'
                        value={value}
                        name='solicitante'
                        onChange={onChange} />
                </div>
                <div className={styles.content}>
                    <label>Sala</label>
                    <select value={value} onChange={onChange}>
                        <option value="1">Bloco A - Lab. de Informática 1</option>
                        <option value="2">Bloco A - Lab. de Informática 2</option>
                        <option value="3">Bloco A - Lab. de Informática 3</option>
                    </select>
                </div>
                <div className={styles.content}>
                    <label>Inicio</label>
                    <input type="datetime-local" value={value} onChange={onChange} />
                </div>
                <div className={styles.content}>
                    <label>Fim</label>
                    <input type="datetime-local" value={value} onChange={onChange} />
                </div>
                <div className={styles.checkBox}>
                    <input type="checkbox" />
                    <label>Concordo com os termos?</label>
                </div>
                <div className={styles.content_button}>
                    <button onClick={onClick}>Reservar sala</button>
                </div>
            </form>
            {children}
        </Container>
    );
}
