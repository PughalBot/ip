import React from 'react'
import Table, { AvatarCell, SelectColumnFilter, deptPill } from './Table'  // new

const getData = () => {
  const data = [
    {
      name: 'Jane Cooper',
      email: 'jane.cooper@example.com',
      id: 'Regional Paradigm Technician',
      department: 'Optimization',
      dept: 'Active',
      section: 'Admin',
      year: 27,
      imgUrl: 'https://imyears.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Cody Fisher',
      email: 'cody.fisher@example.com',
      id: 'Product Directives Officer',
      department: 'Intranet',
      dept: 'Inactive',
      section: 'Owner',
      year: 43,
      imgUrl: 'https://imyears.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Esther Howard',
      email: 'esther.howard@example.com',
      id: 'Forward Response Developer',
      department: 'Directives',
      dept: 'Active',
      section: 'Member',
      year: 32,
      imgUrl: 'https://imyears.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Jenny Wilson',
      email: 'jenny.wilson@example.com',
      id: 'Central Security Manyearr',
      department: 'Program',
      dept: 'Offline',
      section: 'Member',
      year: 29,
      imgUrl: 'https://imyears.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    // {
    //   name: 'Kristin Watson',
    //   email: 'kristin.watson@example.com',
    //   id: 'Lean Implementation Liaison',
    //   department: 'Mobility',
    //   dept: 'Inactive',
    //   section: 'Admin',
    //   year: 36,
    //   imgUrl: 'https://imyears.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    // },
    // {
    //   name: 'Cameron Williamson',
    //   email: 'cameron.williamson@example.com',
    //   id: 'Internal Applications Engineer',
    //   department: 'Security',
    //   dept: 'Active',
    //   section: 'Member',
    //   year: 24,
    //   imgUrl: 'https://imyears.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    // },
  ]
  return [...data, ...data, ...data]
}

function Approve() {

  const columns = React.useMemo(() => [
    {
      Header: "Name",
      accessor: 'name',
      Cell: AvatarCell,
      imgAccessor: "imgUrl",
      emailAccessor: "email",
    },
    {
      Header: "ID",
      accessor: 'id',
    },
    {
      Header: "Dept",
      accessor: 'dept',
      //Cell: deptPill,
    },
    {
      Header: "Year",
      accessor: 'year',
    },
    {
      Header: "Section",
      accessor: 'section',
      Filter: SelectColumnFilter,  // new
      filter: 'includes',
    },
  ], [])

  const data = React.useMemo(() => getData(), [])

  return (
    <div className="min-h-screen bg-[url('https://cdn.discordapp.com/attachments/845617551412297748/975016608328212490/bg.png')] bg-cover bg-gray-100 text-gray-900">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="">
          <h1 className="text-xl font-semibold">ABC COMPANY</h1>
        </div>
        <div className="mt-6">
          <Table columns={columns} data={data} />
        </div>
      </main>
    </div>
  );
}

export default Approve;