import { IgrColumn, IgrGrid, IgrGridModule, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarExporter, IgrGridToolbarHiding, IgrGridToolbarPinning, IgrGridToolbarTitle, IgrPaginator } from '@infragistics/igniteui-react-grids';
import { useGetTable1List as usersMasterUseGetTable1List } from '../hooks/users-master-hooks';
import '@infragistics/igniteui-react-grids/grids';
import styles from './customers.module.css';
import createClassTransformer from '../style-utils';

IgrGridModule.register();

export default function Customers() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const { usersMasterTable1 } = usersMasterUseGetTable1List();

  return (
    <>
      <div className={classes("row-layout customers-container")}>
        <div className={classes("row-layout group")}>
          <IgrGrid data={usersMasterTable1} primaryKey="UserID" rowSelection="multiple" rowEditable="true" allowFiltering="true" filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar grid")}>
            <IgrGridToolbar>
              <IgrGridToolbarActions>
                <IgrGridToolbarPinning></IgrGridToolbarPinning>
                <IgrGridToolbarHiding></IgrGridToolbarHiding>
                <IgrGridToolbarExporter></IgrGridToolbarExporter>
              </IgrGridToolbarActions>
              <IgrGridToolbarTitle>
                <span key={uuid()}>お客様一覧</span>
              </IgrGridToolbarTitle>
            </IgrGridToolbar>
            <IgrColumn field="UserID" dataType="string" header="UserID" hidden="true" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="CustomerID" dataType="string" header="CustomerID" hidden="true" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="GroomName" dataType="string" header="氏名（新郎）" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="BrideName" dataType="string" header="氏名（新婦）" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="GroomEmail" dataType="string" header="Email（新郎）" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="BrideEmail" dataType="string" header="Email（新婦）" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="GroomPhoneNumber" dataType="string" header="電話番号（新郎）" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="BridePhoneNumber" dataType="string" header="電話番号（新婦）" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="GroomAddress" dataType="string" header="住所（新郎）" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="BrideAddress" dataType="string" header="住所（新婦）" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="GroomBirthdate" dataType="string" header="生年月日（新郎）" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="BrideBirthdate" dataType="string" header="生年月日（新婦）" sortable="true" selectable="false"></IgrColumn>
            <IgrPaginator></IgrPaginator>
          </IgrGrid>
        </div>
      </div>
    </>
  );
}
