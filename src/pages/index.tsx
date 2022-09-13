import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";

import useClients from "../hooks/useClients";

export default function Home() {

  const {
    client,
    clients,
    newClient,
    saveClient,
    selectClient,
    excludeClient,
    tableVisible,
    exibitTable
  } = useClients()

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Simple Crud">
        {tableVisible ? (
          <>
            <div className="flex justify-end">
              <Button colour="green" className="mb-4"
                onClick={newClient}>
                Novo Cliente
              </Button>
            </div>
            <Table clients={clients}
              clientSelected={selectClient}
              clientExcluded={excludeClient}
            />
          </>
        ) : (
          <Form
            client={client}
            clientChanged={saveClient}
            cancelled={exibitTable}
          />
        )}
      </Layout>
    </div>
  )
}