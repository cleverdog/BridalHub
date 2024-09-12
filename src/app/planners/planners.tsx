import { IgrAvatar, IgrAvatarModule, IgrCard, IgrCardActions, IgrCardContent, IgrCardHeader, IgrCardModule, IgrIconButton, IgrIconButtonModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import { useGetTable1List as plannnersTableUseGetTable1List } from '../hooks/plannners-table-hooks';
import styles from './planners.module.css';
import createClassTransformer from '../style-utils';

IgrAvatarModule.register();
IgrCardModule.register();
IgrIconButtonModule.register();
IgrRippleModule.register();

export default function Planners() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const { plannnersTableTable1 } = plannnersTableUseGetTable1List();

  return (
    <>
      <div className={classes("row-layout planners-container")}>
        <div className={classes("row-layout group")}>
          <div className={classes("column-layout group_1")}>
            <p className={classes("typography__subtitle-2 text")}>
              <span>在籍プランナー</span>
            </p>
            <div className={classes("row-layout group_2")}>
              {plannnersTableTable1?.map((item) => (
                <IgrCard className={classes("card")} key={uuid()}>
                  <div className={classes("group_3")} key={uuid()}>
                    <IgrCardHeader>
                      <div slot="thumbnail" key={uuid()}>
                        <IgrAvatar src="/src/assets/man02.jpg" shape="circle" className={classes("avatar")} key={uuid()}></IgrAvatar>
                      </div>
                      <h3 slot="title" key={uuid()}>
                        <span key={uuid()}>{item.PlannerName}</span>
                      </h3>
                      <h5 slot="subtitle" key={uuid()}>
                        <span key={uuid()}>{item.Position}</span>
                      </h5>
                    </IgrCardHeader>
                    <IgrCardContent className={classes("body-content")}>
                      <div className={classes("row-layout group_4")} key={uuid()}>
                        <p className={classes("typography__subtitle-2 text_1")}>
                          <span>生年月日</span>
                        </p>
                        <p className={classes("typography__body-1 text_1")}>
                          <span>{item.Birthdate}</span>
                        </p>
                      </div>
                      <div className={classes("row-layout group_4")} key={uuid()}>
                        <p className={classes("typography__subtitle-2 text_1")}>
                          <span>登録年月日</span>
                        </p>
                        <p className={classes("typography__body-1 text_1")}>
                          <span>{item.RegistrationDate}</span>
                        </p>
                      </div>
                    </IgrCardContent>
                    <IgrCardActions className={classes("actions-content")}>
                      <div slot="end" key={uuid()}>
                        <IgrIconButton variant="flat" className={classes("icon-button")} key={uuid()}>
                          <span className={classes("material-icons icon")} key={uuid()}>
                            <span key={uuid()}>mail</span>
                          </span>
                          <IgrRipple key={uuid()}></IgrRipple>
                        </IgrIconButton>
                        <IgrIconButton variant="flat" className={classes("icon-button")} key={uuid()}>
                          <span className={classes("material-icons icon")} key={uuid()}>
                            <span key={uuid()}>phone</span>
                          </span>
                          <IgrRipple key={uuid()}></IgrRipple>
                        </IgrIconButton>
                        <IgrIconButton variant="flat" className={classes("icon-button")} key={uuid()}>
                          <span className={classes("material-icons icon")} key={uuid()}>
                            <span key={uuid()}>calendar_month</span>
                          </span>
                          <IgrRipple key={uuid()}></IgrRipple>
                        </IgrIconButton>
                      </div>
                    </IgrCardActions>
                  </div>
                </IgrCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
