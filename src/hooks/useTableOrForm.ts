import { useState } from "react";

export default function useTableOrForm() {
    const [visible, setVisible] = useState<'table' | 'form'>('table')

    const exibitTable = () => setVisible('table')
    const exibitForm = () => setVisible('form')

    return {
        formVisible: visible === 'form',
        tableVisible: visible === 'table',
        exibitTable,
        exibitForm,
    }
}