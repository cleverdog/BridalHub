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
  console.log(usersMasterTable1);

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
            <IgrColumn field="user_id" dataType="string" header="UserID" hidden="true" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="customer_id" dataType="string" header="CustomerID" hidden="true" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="groom_name" dataType="string" header="氏名（新郎）" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="bride_name" dataType="string" header="氏名（新婦）" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="groom_email" dataType="string" header="Email（新郎）" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="bride_email" dataType="string" header="Email（新婦）" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="groom_phone_number" dataType="string" header="電話番号（新郎）" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="bride_phone_number" dataType="string" header="電話番号（新婦）" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="groom_address" dataType="string" header="住所（新郎）" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="bride_address" dataType="string" header="住所（新婦）" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="groom_birthdate" dataType="string" header="生年月日（新郎）" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="bride_birthdate" dataType="string" header="生年月日（新婦）" sortable="true" selectable="false"></IgrColumn>
            <IgrPaginator></IgrPaginator>
          </IgrGrid>
        </div>
      </div>
    </>
  );
}
