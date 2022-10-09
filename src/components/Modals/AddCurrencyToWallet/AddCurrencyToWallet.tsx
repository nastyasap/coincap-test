import React from 'react';
import {ButtonStyled} from '../../common/CommonStyles';
import {useDispatch} from 'react-redux';
import {walletSlice} from '../../../store/reducers/wallet';
import {useFormik} from 'formik';

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
            const error: { count?: string } = {};
            if (!values.count) {
                error.count = 'Please enter count'
            } else if (/^[0-9]*[.,]?[0-9]+(?:[eE][-+]?[0-9]+)?$/.test(values.count)) {
                error.count = 'Number is required'
            }
        },
        onSubmit: (values) => {
            id && dispatch(walletSlice.actions.addCurrencyToWalletRequest({id, count: +values.count}))
            onClose()
            // formik.resetForm()
        },
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <input {...formik.getFieldProps('count')}/>
            {formik.touched.count && formik.errors.count &&
                <div style={{color: 'red'}}>{formik.errors.count}</div>
            }
            <ButtonStyled type={'submit'}>Submit</ButtonStyled>
        </form>
    )
}