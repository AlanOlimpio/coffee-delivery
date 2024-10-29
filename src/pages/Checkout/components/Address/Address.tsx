import { useFormContext } from 'react-hook-form';
import {
  InputComplementLabel,
  ThreeCol,
  TwoCol,
  Wrapper,
} from './AddressStyled';
import { useEffect } from 'react';

function Address() {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const normalizeCepNumber = (value: string | undefined) => {
    if (!value) return '';
    return value
      .replace(/\D/g, '')
      .replace(/^(\d{5})(\d{3})+?$/, '$1-$2')
      .replace(/(-\d{3})(\d+?)/, '$1');
  };

  const cepValue = watch('cep');

  useEffect(() => {
    setValue('cep', normalizeCepNumber(cepValue));
  }, [cepValue]);

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
