import React from 'react';
import {useDispatch} from 'react-redux';
import {walletSlice} from '../../../store/reducers/wallet';
import {useFormik} from 'formik';
import {ButtonSubmit, FormWrapper, Input} from '../ModalStyled';

type Props = {
    onClose: () => void
    id: string | null
}

export const AddCurrencyToWallet: React.FC<Props> = ({onClose, id}) => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            count: ''
        },
        validate: (values) => {
            const errors: { count?: string } = {};
            if (!values.count) {
                errors.count = 'Please enter count'
            }
            if (!/^[0-9]+(.[0-9]{1,6})?$/.test(values.count)) {
                errors.count = 'Number is required'
            }
            return errors
        },
        onSubmit: (values) => {
            id && dispatch(walletSlice.actions.addCurrencyToWalletRequest({id, count: +values.count}))
            onClose()
        },
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <FormWrapper>
                <>
                    <Input id={'count'} value={formik.values.count} onChange={formik.handleChange} autoFocus/>

                </>
                {formik.touched.count && formik.errors.count &&
                    <div style={{color: 'red'}}>{formik.errors.count}</div>
                }
                <ButtonSubmit type={'submit'}>Submit</ButtonSubmit>
            </FormWrapper>
        </form>
    )
}