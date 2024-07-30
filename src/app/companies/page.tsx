import React from 'react';
import Header from '../components/header';
import Toolbar from '../components/toolbar';
import SearchInput from '../components/search-input';
import AddCompanyButton from '../components/add-company-btn';
import CompanyTable from '../components/company-table';
import CompanyRow from '../components/company-row';
import { Status } from '../components/status-label';

export interface PageProps {
  title: string;
}

export default function Page({ title }: PageProps) {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput />
      </Toolbar>
      <CompanyTable>
        <CompanyRow
          id={1}
          category={'Products'}
          company={'Costco'}
          status={Status.Pending}
          promotion={true}
          country={'USA'}
          joinedDate={'02.19.2023'}
        />
      </CompanyTable>
    </>
  );
}
