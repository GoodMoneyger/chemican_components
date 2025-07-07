import React from 'react';
import type { Meta, StoryFn } from 'storybook/react-vite';
import { IconPdf, IconExternalLink } from '@tabler/icons-react';

import { Chip } from '../Chip/Chip';
import { ColorBackgroundTokens } from '../../tokens';
import { Checkbox } from '../Checkbox/Checkbox';

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from './Table';

type DataEntry = {
  sdsName: string;
  productName: string;
  companyName: string;
  creation: string;
  status: string;
  statusColor: ColorBackgroundTokens;
};

const data: DataEntry[] = [
  {
    sdsName: 'SDS-Uranium_Metal_2020.pdf',
    productName: 'Uranium Metal',
    companyName: '検見間株式会社',
    creation: '2024/04/16',
    status: '分析前',
    statusColor: ColorBackgroundTokens.StatusNeutral,
  },
  {
    sdsName: 'SDS-Plutonium_Oxide_2021.pdf',
    productName: 'Plutonium Oxide',
    companyName: '福田商事株式会社',
    creation: '2023/03/21',
    status: '分析中',
    statusColor: ColorBackgroundTokens.StatusInprogress,
  },
  {
    sdsName: 'SDS-Thorium_2022.pdf',
    productName: 'Thorium',
    companyName: '中村化学工業株式会社',
    creation: '2022/08/15',
    status: '登録済み',
    statusColor: ColorBackgroundTokens.StatusSuccess,
  },
  {
    sdsName: 'SDS-Cobalt_Alloy_2019.pdf',
    productName: 'Cobalt Alloy',
    companyName: '大和工業株式会社',
    creation: '2021/11/05',
    status: '分析不可',
    statusColor: ColorBackgroundTokens.StatusAlert,
  },
  {
    sdsName: 'SDS-Lead_Metal_2023.pdf',
    productName: 'Lead Metal',
    companyName: '山田金属株式会社',
    creation: '2023/07/29',
    status: '分析不可',
    statusColor: ColorBackgroundTokens.StatusWarning,
  },
  {
    sdsName: 'SDS-Cadmium_Compound_2020.pdf',
    productName: 'Cadmium Compound',
    companyName: '川崎薬品株式会社',
    creation: '2020/05/12',
    status: '再データ化中',
    statusColor: ColorBackgroundTokens.StatusQueue,
  },
];

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
};

export default meta;

const Template: StoryFn = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>
          <Checkbox label="" />
        </TableHead>
        <TableHead>SDS名</TableHead>
        <TableHead>製品名</TableHead>
        <TableHead>会社名</TableHead>
        <TableHead>作成日 / 改訂日</TableHead>
        <TableHead>ステータス</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {data.map((row, index) => (
        <TableRow key={index}>
          <TableCell>
            <Checkbox label="" />
          </TableCell>
          <TableCell>
            <div className="inline-flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div
                  className="inline-flex aspect-auto rounded
                    bg-shape-accent-gray-pale p-0.5"
                >
                  <IconPdf size={16} className="text-shape-primary" />
                </div>
                {row.sdsName}
              </div>
              <a href="#">
                <IconExternalLink size={20} className="text-shape-primary" />
              </a>
            </div>
          </TableCell>
          <TableCell>
            <div
              className="inline-flex rounded bg-surface-secondary px-xs py-xxs
                uppercase"
            >
              {row.productName}
            </div>
          </TableCell>
          <TableCell>{row.companyName}</TableCell>
          <TableCell>{row.creation}</TableCell>
          <TableCell>
            <Chip accentColor={row.statusColor}>{row.status}</Chip>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export const Default = Template.bind({});
Default.args = {
  data,
};
