import { IgrAvatar, IgrAvatarModule, IgrButton, IgrButtonModule, IgrDialog, IgrDialogModule, IgrIconButton, IgrIconButtonModule, IgrList, IgrListItem, IgrListModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import { useRef } from 'react';
import styles from './reservations.module.css';
import createClassTransformer from '../style-utils';

IgrAvatarModule.register();
IgrButtonModule.register();
IgrDialogModule.register();
IgrIconButtonModule.register();
IgrListModule.register();
IgrRippleModule.register();

export default function Reservations() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const cancelApptDialog = useRef<IgrDialog>(null);

  return (
    <>
      <div className={classes("row-layout reservations-container")}>
        <div className={classes("row-layout group")}>
          <div className={classes("column-layout group_1")}>
            <div className={classes("column-layout group_2")}>
              <div className={classes("row-layout group_3")}>
                <div className={classes("row-layout group_4")}>
                  <p className={classes("typography__subtitle-2 text")}>
                    <span>今週の予定</span>
                  </p>
                </div>
              </div>
              <IgrList className={classes("list")}>
                <IgrListItem key={uuid()}>
                  <div key={uuid()}>
                    <div className={classes("row-layout group_5")} key={uuid()}>
                      <div className={classes("row-layout group_6")}>
                        <img src="/src/assets/appt-upcoming.svg" className={classes("image")} />
                        <div className={classes("column-layout group_7")}>
                          <p className={classes("typography__subtitle-2 content")}>
                            <span>新郎：田中 涼平様 - 新婦：高橋 舞様</span>
                          </p>
                          <p className={classes("typography__caption content")}>
                            <span>2024.9.21 10:00am - 3:30pm（桜の間）</span>
                          </p>
                        </div>
                      </div>
                      <IgrIconButton variant="flat" className={classes("icon-button")}>
                        <span className={classes("material-icons icon")} key={uuid()}>
                          <span key={uuid()}>keyboard_arrow_right</span>
                        </span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrIconButton>
                    </div>
                  </div>
                </IgrListItem>
                <IgrListItem key={uuid()}>
                  <div key={uuid()}>
                    <div className={classes("row-layout group_5")} key={uuid()}>
                      <div className={classes("row-layout group_6")}>
                        <img src="/src/assets/appt-upcoming.svg" className={classes("image")} />
                        <div className={classes("column-layout group_7")}>
                          <p className={classes("typography__subtitle-2 content")}>
                            <span>新郎：岡田 和也様 - 新婦：清水 くみ子様</span>
                          </p>
                          <p className={classes("typography__caption content")}>
                            <span>2024.9.22 2:00pm - 5:30pm（雲上の間）</span>
                          </p>
                        </div>
                      </div>
                      <IgrIconButton variant="flat" className={classes("icon-button")}>
                        <span className={classes("material-icons icon")} key={uuid()}>
                          <span key={uuid()}>keyboard_arrow_right</span>
                        </span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrIconButton>
                    </div>
                  </div>
                </IgrListItem>
              </IgrList>
            </div>
            <div className={classes("column-layout group_2")}>
              <div className={classes("row-layout group_3")}>
                <div className={classes("row-layout group_4")}>
                  <p className={classes("typography__subtitle-2 text")}>
                    <span>来週以降の予定</span>
                  </p>
                </div>
              </div>
              <IgrList className={classes("list")}>
                <IgrListItem key={uuid()}>
                  <div key={uuid()}>
                    <div className={classes("row-layout group_5")} key={uuid()}>
                      <div className={classes("row-layout group_6")}>
                        <img src="/src/assets/appt-past.svg" className={classes("image")} />
                        <div className={classes("column-layout group_7")}>
                          <p className={classes("typography__subtitle-2 content")}>
                            <span>新郎：山田 浩様 - 新婦：斎藤 直子様</span>
                          </p>
                          <p className={classes("typography__caption content")}>
                            <span>2024.9.23 10:00am - 3:30pm（桜の間）</span>
                          </p>
                        </div>
                      </div>
                      <IgrIconButton variant="flat" className={classes("icon-button")}>
                        <span className={classes("material-icons icon")} key={uuid()}>
                          <span key={uuid()}>keyboard_arrow_right</span>
                        </span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrIconButton>
                    </div>
                  </div>
                </IgrListItem>
                <IgrListItem key={uuid()}>
                  <div key={uuid()}>
                    <div className={classes("row-layout group_5")} key={uuid()}>
                      <div className={classes("row-layout group_6")}>
                        <img src="/src/assets/appt-past.svg" className={classes("image")} />
                        <div className={classes("column-layout group_7")}>
                          <p className={classes("typography__subtitle-2 content")}>
                            <span>新郎：伊藤 零様 - 新婦：加藤 七夏様</span>
                          </p>
                          <p className={classes("typography__caption content")}>
                            <span>2024.9.28 10:00am - 3:30pm（清風の間）</span>
                          </p>
                        </div>
                      </div>
                      <IgrIconButton variant="flat" className={classes("icon-button")}>
                        <span className={classes("material-icons icon")} key={uuid()}>
                          <span key={uuid()}>keyboard_arrow_right</span>
                        </span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrIconButton>
                    </div>
                  </div>
                </IgrListItem>
                <IgrListItem key={uuid()}>
                  <div key={uuid()}>
                    <div className={classes("row-layout group_5")} key={uuid()}>
                      <div className={classes("row-layout group_6")}>
                        <img src="/src/assets/appt-past.svg" className={classes("image")} />
                        <div className={classes("column-layout group_7")}>
                          <p className={classes("typography__subtitle-2 content")}>
                            <span>新郎：中島 亮介様 - 新婦：山本 桃子様</span>
                          </p>
                          <p className={classes("typography__caption content")}>
                            <span>2024.9.28 10:00am - 3:30pm（桜の間）</span>
                          </p>
                        </div>
                      </div>
                      <IgrIconButton variant="flat" className={classes("icon-button")}>
                        <span className={classes("material-icons icon")} key={uuid()}>
                          <span key={uuid()}>keyboard_arrow_right</span>
                        </span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrIconButton>
                    </div>
                  </div>
                </IgrListItem>
                <IgrListItem key={uuid()}>
                  <div key={uuid()}>
                    <div className={classes("row-layout group_5")} key={uuid()}>
                      <div className={classes("row-layout group_6")}>
                        <img src="/src/assets/appt-past.svg" className={classes("image")} />
                        <div className={classes("column-layout group_7")}>
                          <p className={classes("typography__subtitle-2 content")}>
                            <span>新郎：藤田 晃様 - 新婦：小林 香織様</span>
                          </p>
                          <p className={classes("typography__caption content")}>
                            <span>2024.9.28 18:00am - 21:30pm（桜の間）</span>
                          </p>
                        </div>
                      </div>
                      <IgrIconButton variant="flat" className={classes("icon-button")}>
                        <span className={classes("material-icons icon")} key={uuid()}>
                          <span key={uuid()}>keyboard_arrow_right</span>
                        </span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrIconButton>
                    </div>
                  </div>
                </IgrListItem>
              </IgrList>
            </div>
          </div>
        </div>
        <div className={classes("row-layout group_8")}>
          <div className={classes("column-layout group_9")}>
            <h6 className={classes("content")}>
              <span>新郎：田中 涼平様 - 新婦：高橋 舞様 挙式・披露宴</span>
            </h6>
            <div className={classes("column-layout group_10")}>
              <div className={classes("row-layout group_11")}>
                <div className={classes("column-layout group_12")}>
                  <p className={classes("typography__subtitle-2 text_1")}>
                    <span>プランナー：渡辺 真綾</span>
                  </p>
                </div>
              </div>
              <div className={classes("group_13")}>
                <img src="/src/assets/sakura_no_ma_wedding_hall.jpg" className={classes("image_1")} />
                <IgrList className={classes("list")}>
                  <IgrListItem key={uuid()}>
                    <div slot="start" key={uuid()}>
                      <IgrAvatar className={classes("avatar")} key={uuid()}>
                        <span className={classes("material-icons icon_1")} key={uuid()}>
                          <span key={uuid()}>calendar_today</span>
                        </span>
                      </IgrAvatar>
                    </div>
                    <div slot="title" key={uuid()}>2024.9.21 Sat.</div>
                  </IgrListItem>
                  <IgrListItem key={uuid()}>
                    <div slot="start" key={uuid()}>
                      <IgrAvatar className={classes("avatar")} key={uuid()}>
                        <span className={classes("material-icons icon_1")} key={uuid()}>
                          <span key={uuid()}>access_time</span>
                        </span>
                      </IgrAvatar>
                    </div>
                    <div slot="title" key={uuid()}>10:00am - 3:30pm</div>
                  </IgrListItem>
                  <IgrListItem key={uuid()}>
                    <div slot="start" key={uuid()}>
                      <IgrAvatar className={classes("avatar")} key={uuid()}>
                        <span className={classes("material-icons icon_1")} key={uuid()}>
                          <span key={uuid()}>chair</span>
                        </span>
                      </IgrAvatar>
                    </div>
                    <div slot="title" key={uuid()}>桜の間</div>
                  </IgrListItem>
                </IgrList>
              </div>
            </div>
            <div className={classes("column-layout group_14")}>
              <p className={classes("typography__subtitle-2 text_2")}>
                <span>関連スタッフ</span>
              </p>
              <div className={classes("column-layout group_15")}>
                <p className={classes("typography__overline content")}>
                  <span>- フォトグラファー: 鈴木一郎
 ichiro.suzuki@photo.com, 080-1234-5678</span>
                </p>
                <p className={classes("typography__overline content")}>
                  <span>- ビデオグラファー: 佐藤健
 ken.sato@videoworks.jp, 080-2345-6789</span>
                </p>
                <p className={classes("typography__overline content")}>
                  <span>- フラワーコーディネーター:松本優子
yuko.m@flowdesign.com, 090-3456-7890</span>
                </p>
                <p className={classes("typography__overline content")}>
                  <span>- ヘアメイクアーティスト: 高橋美穂
miho.takahashi@beauty.jp, 080-5678-9012</span>
                </p>
                <p className={classes("typography__overline content")}>
                  <span>- 司会者: 伊藤陽子
yoko.ito@mcservices.com, 090-8901-2345</span>
                </p>
              </div>
            </div>
            <div className={classes("row-layout group_16")}>
              <IgrButton className={classes("button button_2")}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>diversity_3</span>
                </span>
                <span key={uuid()}>出席者管理</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
              <IgrButton className={classes("button button_3")}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>liquor</span>
                </span>
                <span key={uuid()}>施工管理</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
            </div>
          </div>
        </div>
        <IgrDialog closeOnOutsideClick="true" ref={cancelApptDialog}>
          <h5 slot="title" key={uuid()}>
            <span>Appointment Cancellation</span>
          </h5>
          <p className={classes("typography__body-1 text_1")} key={uuid()}>
            <span>Are you sure you want to cancel your appointment?</span>
          </p>
          <div slot="footer" key={uuid()}>
            <IgrButton variant="flat" clicked={() => cancelApptDialog?.current?.toggle()} className={classes("button_1")} key={uuid()}>
              <span key={uuid()}>No, go back</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton variant="flat" clicked={() => cancelApptDialog?.current?.toggle()} className={classes("button_1 button_1_1")} key={uuid()}>
              <span key={uuid()}>Yes, cancel</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
          </div>
        </IgrDialog>
      </div>
    </>
  );
}
