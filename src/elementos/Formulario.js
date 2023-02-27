import styled from 'styled-components';

const colores = {
    borde: '#0075FF',
    error: '#bb2929',
    exito: '#1ed12d',
};

const Formulario = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

const Label = styled.label`
    display: block;
    font-weight: 700;
    padding: 10px;
    min-heigth: 40px;
    cursor: pointer;
`;

const GrupoInput = styled.div`
    position: relative;
    z-index: 90;
`;

const Input = styled.input`
    whidth: 100%;
    background: #fff;
    border-radius: 3px;
    heigth: 45px;
    line-heigth: 45px;
    padding: 0 48px 0 10px;
    transition: 0.2s ease all;
    border: 3px solid transparent;

    &:focus {
        border: 3px solid ${colores.borde};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
    }
`;

export { Formulario, Label, GrupoInput, Input };
