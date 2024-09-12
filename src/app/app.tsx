import { IgrAvatar, IgrAvatarModule, IgrButton, IgrButtonModule, IgrDialog, IgrDialogModule, IgrIconButton, IgrIconButtonModule, IgrNavbar, IgrNavbarModule, IgrNavDrawer, IgrNavDrawerItem, IgrNavDrawerModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import styles from './app.module.css';
import createClassTransformer from './style-utils';

IgrAvatarModule.register();
IgrButtonModule.register();
IgrDialogModule.register();
IgrIconButtonModule.register();
IgrNavbarModule.register();
IgrNavDrawerModule.register();
IgrRippleModule.register();

export default function App() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();
  const dialog = useRef<IgrDialog>(null);
  const [iconButtonVisible, setIconButtonVisible] = useState<boolean | undefined>(false);

  return (
    <>
      <div className={classes("column-layout master-view-container")}>
        <div className={classes("row-layout main-navigation")}>
          <IgrNavbar className={classes("navbar")}>
            <div className={classes("row-layout group")} key={uuid()}>
              <div onClick={() => navigate(`/home`)} className={classes("row-layout group_1")}>
                <img src="/src/assets/brideal_hub_logo2.svg" className={classes("image")} />
                <p className={classes("typography__subtitle-2 text")}>
                  <span>Bridal Hub</span>
                </p>
              </div>
            </div>
            <div slot="end" className={classes("row-layout group_2")} key={uuid()}>
              <div className={classes("row-layout group_1")}>
                <IgrAvatar src="/src/assets/cherryblossom.svg" shape="circle" className={classes("avatar")}></IgrAvatar>
                <p className={classes("typography__subtitle-2 text")}>
                  <span>桜雲閣</span>
                </p>
              </div>
              {iconButtonVisible && (
                <IgrIconButton variant="flat" className={classes("icon-button")}>
                  <span className={classes("material-icons icon")} key={uuid()}>
                    <span key={uuid()}>menu</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
              )}
            </div>
          </IgrNavbar>
        </div>
        <div className={classes("row-layout bottom-container")}>
          <IgrNavDrawer open="true" position="relative" className={classes("nav-drawer")}>
            <div style={{display: 'contents'}} onClick={() => navigate(`/home`)} key={uuid()}>
              <IgrNavDrawerItem>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon_1")} key={uuid()}>
                    <span key={uuid()}>home</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>ダッシュボード</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate(`/customers`)} key={uuid()}>
              <IgrNavDrawerItem>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon_1")} key={uuid()}>
                    <span key={uuid()}>people_outline</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>顧客管理</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate(`/reservations`)} key={uuid()}>
              <IgrNavDrawerItem>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon_1")} key={uuid()}>
                    <span key={uuid()}>calendar_today</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>予約管理</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate(`/planners`)} key={uuid()}>
              <IgrNavDrawerItem>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon_1")} key={uuid()}>
                    <span key={uuid()}>support_agent</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>プランナー管理</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{display: 'contents'}} onClick={() => dialog?.current?.toggle()} key={uuid()}>
              <IgrNavDrawerItem>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon_1")} key={uuid()}>
                    <span key={uuid()}>campaign</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>フェア管理</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{display: 'contents'}} onClick={() => dialog?.current?.toggle()} key={uuid()}>
              <IgrNavDrawerItem>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon_1")} key={uuid()}>
                    <span key={uuid()}>folder_open</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>ドキュメント管理</div>
              </IgrNavDrawerItem>
            </div>
          </IgrNavDrawer>
          <div className={classes("view-container")}>
            <Outlet></Outlet>
          </div>
          <IgrDialog closeOnOutsideClick="true" ref={dialog}>
            <p key={uuid()}>本サンプルアプリでは、該当の画面はご用意しておりません。</p>
            <div slot="footer" key={uuid()}>
              <IgrButton variant="flat" clicked={() => dialog?.current?.toggle()} key={uuid()}>
                <span key={uuid()}></span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
              <IgrButton variant="flat" clicked={() => dialog?.current?.toggle()} key={uuid()}>
                <span key={uuid()}>OK</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
            </div>
          </IgrDialog>
        </div>
      </div>
    </>
  );
}
