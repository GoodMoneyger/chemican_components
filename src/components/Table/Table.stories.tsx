import React from 'react';
import type { Meta, StoryFn } from 'storybook/react-vite';
import { IconExternalLink, IconFileCheck } from '@tabler/icons-react';

import {
  StatusIndicator,
  type StatusLevel,
} from '../StatusIndicator/StatusIndicator';
import { Checkbox } from '../Checkbox/Checkbox';
import { Tag } from '../Tag';

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
  manufacturer: string;
  dataStatus: string;
  dataStatusLevel: StatusLevel;
  pdfUploadDate: string;
  assignedUser: string;
  sdsRevisionDate: string;
  supplierConfirmDate: string;
  revisionStatus: string;
  revisionStatusLevel: StatusLevel;
  departments: string[];
  tags: Array<{ label: string; colorCode: number }>;
  productCodes: string[];
  riskAssessmentDate: string;
  canExport: boolean;
};

const data: DataEntry[] = [
  {
    sdsName: 'SDS-Uranium_Metal_2020.pdf',
    productName: 'URANIUM METAL',
    manufacturer: '検見間株式会社',
    dataStatus: 'データ化前',
    dataStatusLevel: 'neutral',
    pdfUploadDate: '2024/04/16',
    assignedUser: '小田 史彦',
    sdsRevisionDate: '2024/04/16',
    supplierConfirmDate: '2024/04/16',
    revisionStatus: '旧版',
    revisionStatusLevel: 'warning',
    departments: ['開発チーム', '研究開発部'],
    tags: [
      { label: '2024年追加分', colorCode: 11 },
      { label: '拠点：〇〇工場', colorCode: 7 },
      { label: '編集者追加分タグ', colorCode: 3 },
    ],
    productCodes: ['7732-18-5', '64-17-5', '12-34-56'],
    riskAssessmentDate: '2024/04/16',
    canExport: true,
  },
  {
    sdsName: 'SDS-Plutonium_Oxide_2021.pdf',
    productName: 'PLUTONIUM OXIDE',
    manufacturer: '福田商事株式会社',
    dataStatus: '分析中',
    dataStatusLevel: 'inProgress',
    pdfUploadDate: '2023/03/21',
    assignedUser: '佐藤 花子',
    sdsRevisionDate: '2023/02/10',
    supplierConfirmDate: '2023/02/20',
    revisionStatus: '対応中',
    revisionStatusLevel: 'inProgress',
    departments: ['製造部'],
    tags: [
      { label: '放射性物質', colorCode: 15 },
      { label: '危険物', colorCode: 1 },
    ],
    productCodes: ['7440-07-5'],
    riskAssessmentDate: '2023/04/15',
    canExport: true,
  },
  {
    sdsName: 'SDS-Thorium_2022.pdf',
    productName: 'THORIUM',
    manufacturer: '中村化学工業株式会社',
    dataStatus: '登録済み',
    dataStatusLevel: 'success',
    pdfUploadDate: '2022/08/15',
    assignedUser: '鈴木 一郎',
    sdsRevisionDate: '2022/07/01',
    supplierConfirmDate: '2022/07/10',
    revisionStatus: '完了',
    revisionStatusLevel: 'success',
    departments: ['品質管理部', '環境安全部'],
    tags: [
      { label: '重金属', colorCode: 0 },
      { label: '管理物質', colorCode: 13 },
    ],
    productCodes: ['7440-29-1', '1314-20-1'],
    riskAssessmentDate: '2022/09/01',
    canExport: true,
  },
  {
    sdsName: 'SDS-Cobalt_Alloy_2019.pdf',
    productName: 'COBALT ALLOY',
    manufacturer: '大和工業株式会社',
    dataStatus: '分析不可',
    dataStatusLevel: 'alert',
    pdfUploadDate: '2021/11/05',
    assignedUser: '高橋 美咲',
    sdsRevisionDate: '2021/10/01',
    supplierConfirmDate: '2021/10/15',
    revisionStatus: 'エラー',
    revisionStatusLevel: 'alert',
    departments: ['製造部'],
    tags: [
      { label: '合金', colorCode: 5 },
      { label: '拠点：東京工場', colorCode: 7 },
    ],
    productCodes: ['7440-48-4'],
    riskAssessmentDate: '2021/12/01',
    canExport: false,
  },
  {
    sdsName: 'SDS-Lead_Metal_2023.pdf',
    productName: 'LEAD METAL',
    manufacturer: '山田金属株式会社',
    dataStatus: '分析不可',
    dataStatusLevel: 'warning',
    pdfUploadDate: '2023/07/29',
    assignedUser: '伊藤 健太',
    sdsRevisionDate: '2023/06/15',
    supplierConfirmDate: '2023/06/25',
    revisionStatus: '要確認',
    revisionStatusLevel: 'warning',
    departments: ['環境安全部'],
    tags: [
      { label: '重金属', colorCode: 0 },
      { label: '有害物質', colorCode: 15 },
      { label: '管理強化', colorCode: 1 },
    ],
    productCodes: ['7439-92-1', '1309-60-0'],
    riskAssessmentDate: '2023/08/10',
    canExport: false,
  },
  {
    sdsName: 'SDS-Cadmium_Compound_2020.pdf',
    productName: 'CADMIUM COMPOUND',
    manufacturer: '川崎薬品株式会社',
    dataStatus: '再データ化中',
    dataStatusLevel: 'queue',
    pdfUploadDate: '2020/05/12',
    assignedUser: '渡辺 優子',
    sdsRevisionDate: '2020/04/01',
    supplierConfirmDate: '2020/04/10',
    revisionStatus: '保留',
    revisionStatusLevel: 'queue',
    departments: ['研究開発部'],
    tags: [
      { label: '化合物', colorCode: 9 },
      { label: '管理物質', colorCode: 13 },
      { label: '2020年追加分', colorCode: 11 },
    ],
    productCodes: ['7440-43-9'],
    riskAssessmentDate: '2020/06/01',
    canExport: false,
  },
  {
    sdsName: 'SDS-Mercury_Compound_2024.pdf',
    productName: 'MERCURY COMPOUND',
    manufacturer: '横浜化成株式会社',
    dataStatus: '登録済み',
    dataStatusLevel: 'success',
    pdfUploadDate: '2024/01/20',
    assignedUser: '山本 和子',
    sdsRevisionDate: '2023/12/05',
    supplierConfirmDate: '2023/12/15',
    revisionStatus: '完了',
    revisionStatusLevel: 'success',
    departments: ['品質管理部'],
    tags: [
      { label: '有害物質', colorCode: 15 },
      { label: '重金属', colorCode: 0 },
      { label: '拠点：横浜工場', colorCode: 7 },
    ],
    productCodes: ['7439-97-6', '7487-94-7'],
    riskAssessmentDate: '2024/02/10',
    canExport: true,
  },
  {
    sdsName: 'SDS-Chromium_Oxide_2023.pdf',
    productName: 'CHROMIUM OXIDE',
    manufacturer: '神戸工業株式会社',
    dataStatus: '分析中',
    dataStatusLevel: 'inProgress',
    pdfUploadDate: '2023/09/14',
    assignedUser: '小林 誠',
    sdsRevisionDate: '2023/08/01',
    supplierConfirmDate: '2023/08/10',
    revisionStatus: '対応中',
    revisionStatusLevel: 'inProgress',
    departments: ['製造部', '開発チーム'],
    tags: [
      { label: '酸化物', colorCode: 3 },
      { label: '顔料', colorCode: 2 },
    ],
    productCodes: ['1308-38-9'],
    riskAssessmentDate: '2023/10/05',
    canExport: false,
  },
  {
    sdsName: 'SDS-Nickel_Sulfate_2022.pdf',
    productName: 'NICKEL SULFATE',
    manufacturer: '広島ケミカル株式会社',
    dataStatus: '分析不可',
    dataStatusLevel: 'alert',
    pdfUploadDate: '2022/06/18',
    assignedUser: '加藤 真理子',
    sdsRevisionDate: '2022/05/10',
    supplierConfirmDate: '2022/05/20',
    revisionStatus: 'エラー',
    revisionStatusLevel: 'alert',
    departments: ['環境安全部'],
    tags: [
      { label: '硫酸塩', colorCode: 8 },
      { label: '管理物質', colorCode: 13 },
    ],
    productCodes: ['7786-81-4'],
    riskAssessmentDate: '2022/07/15',
    canExport: false,
  },
  {
    sdsName: 'SDS-Arsenic_Trioxide_2021.pdf',
    productName: 'ARSENIC TRIOXIDE',
    manufacturer: '仙台製薬株式会社',
    dataStatus: '再データ化中',
    dataStatusLevel: 'queue',
    pdfUploadDate: '2021/03/25',
    assignedUser: '佐々木 隆',
    sdsRevisionDate: '2021/02/10',
    supplierConfirmDate: '2021/02/20',
    revisionStatus: '保留',
    revisionStatusLevel: 'queue',
    departments: ['研究開発部'],
    tags: [
      { label: '毒物', colorCode: 15 },
      { label: '管理物質', colorCode: 13 },
      { label: '特別管理', colorCode: 1 },
    ],
    productCodes: ['1327-53-3'],
    riskAssessmentDate: '2021/04/20',
    canExport: true,
  },
  {
    sdsName: 'SDS-Beryllium_Metal_2024.pdf',
    productName: 'BERYLLIUM METAL',
    manufacturer: '名古屋金属工業株式会社',
    dataStatus: 'データ化前',
    dataStatusLevel: 'neutral',
    pdfUploadDate: '2024/03/12',
    assignedUser: '木村 直樹',
    sdsRevisionDate: '2024/02/05',
    supplierConfirmDate: '2024/02/15',
    revisionStatus: '未対応',
    revisionStatusLevel: 'neutral',
    departments: ['製造部'],
    tags: [
      { label: '重金属', colorCode: 0 },
      { label: '軽量金属', colorCode: 5 },
      { label: '2024年追加分', colorCode: 11 },
    ],
    productCodes: ['7440-41-7'],
    riskAssessmentDate: '2024/04/10',
    canExport: false,
  },
  {
    sdsName: 'SDS-Silver_Nitrate_2023.pdf',
    productName: 'SILVER NITRATE',
    manufacturer: '大阪化学工業株式会社',
    dataStatus: '登録済み',
    dataStatusLevel: 'success',
    pdfUploadDate: '2023/11/08',
    assignedUser: '中島 美智子',
    sdsRevisionDate: '2023/10/01',
    supplierConfirmDate: '2023/10/10',
    revisionStatus: '完了',
    revisionStatusLevel: 'success',
    departments: ['品質管理部'],
    tags: [
      { label: '硝酸塩', colorCode: 8 },
      { label: '試薬', colorCode: 9 },
    ],
    productCodes: ['7761-88-8'],
    riskAssessmentDate: '2023/12/05',
    canExport: true,
  },
];

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
};

export default meta;

const Template: StoryFn = () => {
  const [sortOrders, setSortOrders] = React.useState<{
    [key: string]: 'asc' | 'desc' | undefined;
  }>({
    pdfUploadDate: undefined,
    sdsRevisionDate: undefined,
    supplierConfirmDate: undefined,
    riskAssessmentDate: undefined,
  });

  const toggleSort = (column: string) => {
    setSortOrders((prev) => ({
      ...prev,
      [column]:
        prev[column] === 'asc'
          ? 'desc'
          : prev[column] === 'desc'
            ? undefined
            : 'asc',
    }));
  };

  const sortedData = React.useMemo(() => {
    const sorted = [...data];

    if (sortOrders.pdfUploadDate) {
      sorted.sort((a, b) => {
        const compare = a.pdfUploadDate.localeCompare(b.pdfUploadDate);
        return sortOrders.pdfUploadDate === 'asc' ? compare : -compare;
      });
    } else if (sortOrders.sdsRevisionDate) {
      sorted.sort((a, b) => {
        const compare = a.sdsRevisionDate.localeCompare(b.sdsRevisionDate);
        return sortOrders.sdsRevisionDate === 'asc' ? compare : -compare;
      });
    } else if (sortOrders.supplierConfirmDate) {
      sorted.sort((a, b) => {
        const compare = a.supplierConfirmDate.localeCompare(
          b.supplierConfirmDate
        );
        return sortOrders.supplierConfirmDate === 'asc' ? compare : -compare;
      });
    } else if (sortOrders.riskAssessmentDate) {
      sorted.sort((a, b) => {
        const compare = a.riskAssessmentDate.localeCompare(
          b.riskAssessmentDate
        );
        return sortOrders.riskAssessmentDate === 'asc' ? compare : -compare;
      });
    }

    return sorted;
  }, [sortOrders]);

  return (
    <div className="overflow-x-auto">
      <Table className="w-max">
        <TableHeader>
          <TableRow>
            <TableHead>
              <Checkbox label="" />
            </TableHead>
            <TableHead>SDSファイル名</TableHead>
            <TableHead>製品名</TableHead>
            <TableHead>製造者</TableHead>
            <TableHead>データ化ステータス</TableHead>
            <TableHead>
              PDFアップロード日{' '}
              <TableHeadSortButton
                sortOrder={sortOrders.pdfUploadDate}
                onClick={() => toggleSort('pdfUploadDate')}
              />
            </TableHead>
            <TableHead>担当ユーザー</TableHead>
            <TableHead>
              SDS改訂日{' '}
              <TableHeadSortButton
                sortOrder={sortOrders.sdsRevisionDate}
                onClick={() => toggleSort('sdsRevisionDate')}
              />
            </TableHead>
            <TableHead>
              サプライヤーへの確認日{' '}
              <TableHeadSortButton
                sortOrder={sortOrders.supplierConfirmDate}
                onClick={() => toggleSort('supplierConfirmDate')}
              />
            </TableHead>
            <TableHead>改訂ステータス</TableHead>
            <TableHead>担当部署</TableHead>
            <TableHead>タグ</TableHead>
            <TableHead>製品コード</TableHead>
            <TableHead>
              リスクアセスメント実施日{' '}
              <TableHeadSortButton
                sortOrder={sortOrders.riskAssessmentDate}
                onClick={() => toggleSort('riskAssessmentDate')}
              />
            </TableHead>
            <TableHead>CREATE SIMPLEを出力</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>
                <Checkbox label="" />
              </TableCell>
              <TableCell>
                <div className="gap-2 inline-flex items-center">
                  <div className="gap-1 flex items-center">{row.sdsName}</div>
                  <a href="#">
                    <IconExternalLink
                      size={20}
                      className="text-shape-primary"
                    />
                  </a>
                </div>
              </TableCell>
              <TableCell>
                <Tag className="uppercase">{row.productName}</Tag>
              </TableCell>
              <TableCell>{row.manufacturer}</TableCell>
              <TableCell>
                <StatusIndicator level={row.dataStatusLevel}>
                  {row.dataStatus}
                </StatusIndicator>
              </TableCell>
              <TableCell>{row.pdfUploadDate}</TableCell>
              <TableCell>
                <Tag>{row.assignedUser}</Tag>
              </TableCell>
              <TableCell>{row.sdsRevisionDate}</TableCell>
              <TableCell>{row.supplierConfirmDate}</TableCell>
              <TableCell>
                <StatusIndicator level={row.revisionStatusLevel}>
                  {row.revisionStatus}
                </StatusIndicator>
              </TableCell>
              <TableCell>
                <div className="gap-xs flex flex-wrap">
                  {row.departments.map((dept, i) => (
                    <Tag key={i}>{dept}</Tag>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <div className="gap-xs flex flex-wrap">
                  {row.tags.map((tag, i) => (
                    <Tag key={i} colorCode={tag.colorCode}>
                      {tag.label}
                    </Tag>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <div className="gap-xs flex flex-wrap">
                  {row.productCodes.map((code, i) => (
                    <Tag key={i}>{code}</Tag>
                  ))}
                </div>
              </TableCell>
              <TableCell>{row.riskAssessmentDate}</TableCell>
              <TableCell>
                <div className="gap-1 flex items-center">
                  <button
                    title="Export v3.1.1"
                    className="text-body-primary flex cursor-pointer
                      items-center"
                  >
                    <IconFileCheck size={16} className="shrink-0" />
                  </button>
                  <span className="text-md text-body-primary font-normal">
                    v3.1.1
                  </span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
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
          <Checkbox label="" />
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
