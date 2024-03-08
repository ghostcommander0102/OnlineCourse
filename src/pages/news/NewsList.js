import { Card } from 'react-bootstrap';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import DataTable from '../../components/DataTable/DataTable';
import { tableData, tableColumns } from '../../components/DataTable/TableData';

function DataTablePage() {
  return (
    <Layout title="Data Tables" content="container">
      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3"><a className='btn btn-primary' href="/news/add">Add New One</a></Block.Title>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <DataTable tableClassName="data-table-head-light table-responsive" data={tableData} columns={tableColumns} />
        </Card>
      </Block>
    </Layout>
  )
}

export default DataTablePage;