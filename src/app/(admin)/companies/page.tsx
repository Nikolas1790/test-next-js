import React from 'react';
import Toolbar from '@/app/components/toolbar';
import SearchInput from '@/app/components/search-input';
import AddCompanyButton from '@/app/components/add-company-button';
import CompanyTable from '@/app/components/company-table';
import CompanyRow from '@/app/components/company-row';
import { Status } from '@/app/components/status-label';
import Header from '@/app/components/header';

export interface PageProps {
}

export default function Page({}: PageProps) {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput />
      </Toolbar>
      <CompanyTable>
        <CompanyRow id={1} category={'Products'} company={'Costco'} status={Status.Pending} promotion={true} country={'USA'} joinedDate={'02.06.2024'} />
      </CompanyTable>
    </>
  );
}