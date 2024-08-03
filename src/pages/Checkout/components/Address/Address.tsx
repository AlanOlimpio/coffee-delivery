import { useFormContext } from 'react-hook-form';
import {
  InputComplementLabel,
  ThreeCol,
  TwoCol,
  Wrapper,
} from './AddressStyled';

function Address() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <Wrapper>
      <TwoCol>
        <input
          placeholder="CEP"
          defaultValue=""
          required
          {...register('cep')}
        />
        {errors.cep?.message && <p>{errors.cep?.message}</p>}
      </TwoCol>
      <input
        placeholder="Rua"
        defaultValue=""
        required
        {...register('address')}
      />
      <TwoCol>
        <input
          placeholder="Número"
          defaultValue=""
          required
          {...register('number')}
        />
        <InputComplementLabel>
          <span>Opcional</span>
          <input
            placeholder="Complemento"
            defaultValue=""
            {...register('complement')}
          />
        </InputComplementLabel>
      </TwoCol>
      <ThreeCol>
        <input
          placeholder="Bairro"
          defaultValue=""
          required
          {...register('downtown')}
        />
        <input
          placeholder="Cidade"
          defaultValue=""
          required
          {...register('city')}
        />
        <input placeholder="UF" defaultValue="" required {...register('uf')} />
      </ThreeCol>
    </Wrapper>
  );
}
export default Address;
