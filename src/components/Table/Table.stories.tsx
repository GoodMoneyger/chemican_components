import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { IconPdf, IconExternalLink } from '@tabler/icons-react';

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableHeadSortButton,
} from './Table';

type DataEntry = {
  sdsName: string;
  productName: string;
  companyName: string;
  creation: string;
  status: string;
  statusLevel:
    | 'success'
    | 'inProgress'
    | 'queue'
    | 'alert'
    | 'warning'
    | 'neutral';
};

const data: DataEntry[] = [
  {
    sdsName: 'SDS-Uranium_Metal_2020.pdf',
    productName: 'Uranium Metal',
    companyName: '検見間株式会社',
    creation: '2024/04/16',
    status: '分析前',
    statusLevel: 'neutral',
  },
  {
    sdsName: 'SDS-Plutonium_Oxide_2021.pdf',
    productName: 'Plutonium Oxide',
    companyName: '福田商事株式会社',
    creation: '2023/03/21',
    status: '分析中',
    statusLevel: 'inProgress',
  },
  {
    sdsName: 'SDS-Thorium_2022.pdf',
    productName: 'Thorium',
    companyName: '中村化学工業株式会社',
    creation: '2022/08/15',
    status: '登録済み',
    statusLevel: 'success',
  },
  {
    sdsName: 'SDS-Cobalt_Alloy_2019.pdf',
    productName: 'Cobalt Alloy',
    companyName: '大和工業株式会社',
    creation: '2021/11/05',
    status: '分析不可',
    statusLevel: 'alert',
  },
  {
    sdsName: 'SDS-Lead_Metal_2023.pdf',
    productName: 'Lead Metal',
    companyName: '山田金属株式会社',
    creation: '2023/07/29',
    status: '分析不可',
    statusLevel: 'warning',
  },
  {
    sdsName: 'SDS-Cadmium_Compound_2020.pdf',
    productName: 'Cadmium Compound',
    companyName: '川崎薬品株式会社',
    creation: '2020/05/12',
    status: '再データ化中',
    statusLevel: 'queue',
  },
];

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
};

export default meta;

const Template: StoryFn = () => {
  const [sortStates, setSortStates] = React.useState<{
    [key: string]: 'asc' | 'desc' | undefined;
  }>({
    sdsName: undefined,
    productName: undefined,
    companyName: undefined,
  });

  const handleSortChange =
    (column: string) => (newSortOrder: 'asc' | 'desc' | undefined) => {
      setSortStates((prev) => {
        // Reset all other columns when sorting a new column
        const newStates = Object.keys(prev).reduce(
          (acc, key) => {
            acc[key] = key === column ? newSortOrder : undefined;
            return acc;
          },
          {} as typeof prev
        );

        return newStates;
      });
    };

  // Sort the data based on current sort states
  const sortedData = React.useMemo(() => {
    const sorted = [...data];

    // Find the active sort column
    const activeSortColumn = Object.entries(sortStates).find(
      ([, sortOrder]) => sortOrder !== undefined
    );

    if (activeSortColumn) {
      const [column, sortOrder] = activeSortColumn;

      sorted.sort((a, b) => {
        let aValue: string;
        let bValue: string;

        switch (column) {
          case 'sdsName':
            aValue = a.sdsName.toLowerCase();
            bValue = b.sdsName.toLowerCase();
            break;
          case 'productName':
            aValue = a.productName.toLowerCase();
            bValue = b.productName.toLowerCase();
            break;
          case 'companyName':
            aValue = a.companyName.toLowerCase();
            bValue = b.companyName.toLowerCase();
            break;
          default:
            return 0;
        }

        if (sortOrder === 'asc') {
          return aValue.localeCompare(bValue);
        } else {
          return bValue.localeCompare(aValue);
        }
      });
    }

    return sorted;
  }, [sortStates]);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead checkbox />
          <TableHead>
            SDS名{' '}
            <TableHeadSortButton
              sortOrder={sortStates.sdsName}
              onSortChange={handleSortChange('sdsName')}
            />
          </TableHead>
          <TableHead>
            製品名
            <TableHeadSortButton
              sortOrder={sortStates.productName}
              onSortChange={handleSortChange('productName')}
            />
          </TableHead>
          <TableHead>
            会社名
            <TableHeadSortButton
              sortOrder={sortStates.companyName}
              onSortChange={handleSortChange('companyName')}
            />
          </TableHead>
          <TableHead>作成日 / 改訂日</TableHead>
          <TableHead>ステータス</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedData.map((row, index) => (
          <TableRow key={index}>
            <TableCell checkbox />
            <TableCell
              leftIcon={IconPdf}
              rightIcon={IconExternalLink}
              prefixBadgeContent="PDF"
              trailingBadgeContent={`v${index + 1}.0`}
              showPrefixBadge={true}
              showTrailingBadge={true}
              onRightIconClick={() =>
                window.open(`https://example.com/sds/${row.sdsName}`, '_blank')
              }
            >
              {row.sdsName}
            </TableCell>
            <TableCell tag>{row.productName}</TableCell>
            <TableCell>{row.companyName}</TableCell>
            <TableCell>{row.creation}</TableCell>
            <TableCell status={row.statusLevel}>{row.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export const Default = Template.bind({});
Default.args = {
  data,
};

const LoadingTemplate: StoryFn = () => (
  <Table loading>
    <TableHeader loading>
      <TableRow>
        <TableHead>
          <TableCell checkbox />
        </TableHead>
        <TableHead>
          SDS名 <TableHeadSortButton sortOrder="asc" />
        </TableHead>
        <TableHead>
          製品名
          <TableHeadSortButton sortOrder="asc" />
        </TableHead>
        <TableHead>
          会社名
          <TableHeadSortButton sortOrder="asc" />
        </TableHead>
        <TableHead>作成日 / 改訂日</TableHead>
        <TableHead>ステータス</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody loading colSpan={6} />
  </Table>
);

export const Loading = LoadingTemplate.bind({});
