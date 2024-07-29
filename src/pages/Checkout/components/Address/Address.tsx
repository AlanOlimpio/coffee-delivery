import {
  InputComplementLabel,
  ThreeCol,
  TwoCol,
  Wrapper,
} from './AddressStyled';

function Address() {
  return (
    <Wrapper>
      <TwoCol>
        <input name="cep" placeholder="CEP" defaultValue="" required />
      </TwoCol>
      <input name="address" placeholder="Rua" defaultValue="" required />
      <TwoCol>
        <input name="number" placeholder="Número" defaultValue="" required />
        <InputComplementLabel>
          <span>Opcional</span>
          <input name="complement" placeholder="Complemento" defaultValue="" />
        </InputComplementLabel>
      </TwoCol>
      <ThreeCol>
        <input name="downtown" placeholder="Bairro" defaultValue="" required />
        <input name="city" placeholder="Cidade" defaultValue="" required />
        <input name="uf" placeholder="UF" defaultValue="" required />
      </ThreeCol>
    </Wrapper>
  );
}
export default Address;
