import Client from "./Client";

export default interface ClientRepositorio {
    save(client: Client): Promise<Client>
    exclude(client: Client): Promise<void>
    getAll(): Promise<Client[]>
}