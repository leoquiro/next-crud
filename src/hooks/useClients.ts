import { useEffect, useState } from "react"
import CollectionClient from "../backend/db/CollectionClient"
import Client from "../core/Client"
import ClientRepo from "../core/ClientRepo"
import useTableOrForm from "./useTableOrForm"

export default function useClientes() {
    const repo: ClientRepo = new CollectionClient()

    const { tableVisible, exibitTable, exibitForm } = useTableOrForm()

    const [client, setClient] = useState<Client>(Client.empty())
    const [clients, setClients] = useState<Client[]>([])

    useEffect(getAll, [])

    function getAll() {
        repo.getAll().then(clients => {
            setClients(clients)
            exibitTable()
        })
    }

    function selectClient(client: Client) {
        setClient(client)
        exibitForm()
    }

    async function excludeClient(client: Client) {
        await repo.exclude(client)
        getAll()
    }

    function newClient() {
        setClient(Client.empty())
        exibitForm()
    }

    async function saveClient(client: Client) {
        await repo.save(client)
        getAll()
    }

    return {
        client,
        clients,
        newClient,
        saveClient,
        excludeClient,
        selectClient,
        getAll,
        tableVisible,
        exibitTable
    }
}