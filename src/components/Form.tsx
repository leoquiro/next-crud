import { useState } from "react";
import Client from "../core/Client";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
    client: Client
    clientChanged?: (client: Client) => void
    cancelled?: () => void
}

export default function Formu(props: FormProps) {
    const id = props.client?.id
    const [name, setName] = useState(props.client?.name ?? '')
    const [age, setAge] = useState(props.client?.age ?? 0)

    return (
        <div>
            {id ? (
                <Input
                    readOnly
                    text="Código"
                    value={id}
                    className="mb-5"
                />
            ) : false}
            <Input 
                text="Nome"
                value={name}
                valueChanged={setName}
                className="mb-5"
            />
            <Input
                text="Idade"
                type="number"
                value={age}
                valueChanged={setAge}
            />
            <div className="flex justify-end mt-7">
                <Button colour="blue" className="mr-2"
                    onClick={() => props.clientChanged?.(new Client(name, +age, id))}>
                    {id ? 'Alter' : 'Save'}
                </Button>
                <Button onClick={props.cancelled}>
                    Cancelar
                </Button>
            </div>
        </div>
    )
}