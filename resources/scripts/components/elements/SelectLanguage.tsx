import styled from 'styled-components/macro';
import tw from 'twin.macro';

const SelectLanguage = styled.select`
    ${tw`shadow-none block px-2 py-1 pr-8 rounded border w-full text-sm transition-colors duration-150 ease-linear`};
    ${tw`bg-neutral-600 border-neutral-500 text-neutral-200`};
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='%23C3D1DF' d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z'/%3e%3c/svg%3e ");

    &:hover:not(:disabled),
    &:focus {
        ${tw`border-neutral-400`};
    }

    &,
    &:hover:not(:disabled),
    &:focus {
        ${tw`outline-none`};
    }

    -webkit-appearance: none;
    -moz-appearance: none;
    background-size: 1rem;
    background-repeat: no-repeat;
    background-position-x: calc(100% - 0.75rem);
    background-position-y: center;

    &::-ms-expand {
        display: none;
    }
`;

export default SelectLanguage;
