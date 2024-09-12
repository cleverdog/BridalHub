import { IgrIconButton, IgrIconButtonModule, IgrList, IgrListItem, IgrListModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import { useNavigate } from 'react-router-dom';
import styles from './home.module.css';
import createClassTransformer from '../style-utils';

IgrIconButtonModule.register();
IgrListModule.register();
IgrRippleModule.register();

export default function Home() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();

  return (
    <>
      <div className={classes("row-layout home-container")}>
        <div className={classes("column-layout group")}>
          <div className={classes("row-layout group_1")}>
            <div onClick={() => navigate(`/planners`)} className={classes("column-layout group_2")}>
              <p className={classes("typography__subtitle-1 content")}>
                <span>2024年予約数</span>
              </p>
              <div className={classes("row-layout group_3")}>
                <div className={classes("row-layout group_4")}>
                  <h4 className={classes("content")}>
                    <span>182</span>
                  </h4>
                  <h6 className={classes("content")}>
                    <span>件</span>
                  </h6>
                </div>
              </div>
            </div>
            <div onClick={() => navigate(`/planners`)} className={classes("column-layout group_5")}>
              <p className={classes("typography__subtitle-1 content")}>
                <span>会場稼働率</span>
              </p>
              <div className={classes("row-layout group_3")}>
                <div className={classes("row-layout group_4")}>
                  <h4 className={classes("content")}>
                    <span>65</span>
                  </h4>
                  <h6 className={classes("content")}>
                    <span>%</span>
                  </h6>
                </div>
              </div>
            </div>
            <div onClick={() => navigate(`/planners`)} className={classes("column-layout group_6")}>
              <p className={classes("typography__subtitle-1 content")}>
                <span>プランナー稼働状況</span>
              </p>
              <div className={classes("row-layout group_3")}>
                <div className={classes("row-layout group_4")}>
                  <h4 className={classes("content")}>
                    <span>15</span>
                  </h4>
                  <h6 className={classes("content")}>
                    <span>件/1人あたり</span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className={classes("row-layout group_7")}>
            <div className={classes("column-layout group_8")}>
              <div className={classes("row-layout group_9")}>
                <div className={classes("row-layout group_4")}>
                  <p className={classes("typography__subtitle-2 text")}>
                    <span>新着情報</span>
                  </p>
                </div>
              </div>
              <IgrList className={classes("list")}>
                <div style={{display: 'contents'}} onClick={() => navigate(`/customers`)} key={uuid()}>
                  <IgrListItem>
                    <div key={uuid()}>
                      <div className={classes("row-layout group_10")} key={uuid()}>
                        <div className={classes("row-layout group_11")}>
                          <div className={classes("column-layout group_12")}>
                            <p className={classes("typography__overline text_1")}>
                              <span>2024.9.18 12:00</span>
                            </p>
                            <p className={classes("typography__subtitle-2 text_1")}>
                              <span>アンケートの回答が届いています</span>
                            </p>
                            <p className={classes("typography__caption text_1")}>
                              <span>2024.8.24（日）実施：佐々木・田中様夫妻のゲストアンケート</span>
                            </p>
                          </div>
                        </div>
                        <IgrIconButton variant="flat" clicked={() => navigate(`/customers`)} className={classes("icon-button")}>
                          <span className={classes("material-icons icon")} key={uuid()}>
                            <span key={uuid()}>keyboard_arrow_right</span>
                          </span>
                          <IgrRipple key={uuid()}></IgrRipple>
                        </IgrIconButton>
                      </div>
                    </div>
                  </IgrListItem>
                </div>
                <div style={{display: 'contents'}} onClick={() => navigate(`/customers`)} key={uuid()}>
                  <IgrListItem>
                    <div key={uuid()}>
                      <div className={classes("row-layout group_10")} key={uuid()}>
                        <div className={classes("row-layout group_11")}>
                          <div className={classes("column-layout group_12")}>
                            <p className={classes("typography__overline text_1")}>
                              <span>2024.9.18 9:30</span>
                            </p>
                            <p className={classes("typography__subtitle-2 text_1")}>
                              <span>見積もりの発行準備ができました</span>
                            </p>
                            <p className={classes("typography__caption text_1")}>
                              <span>内容を確認してください</span>
                            </p>
                          </div>
                        </div>
                        <IgrIconButton variant="flat" clicked={() => navigate(`/customers`)} className={classes("icon-button")}>
                          <span className={classes("material-icons icon")} key={uuid()}>
                            <span key={uuid()}>keyboard_arrow_right</span>
                          </span>
                          <IgrRipple key={uuid()}></IgrRipple>
                        </IgrIconButton>
                      </div>
                    </div>
                  </IgrListItem>
                </div>
                <div style={{display: 'contents'}} onClick={() => navigate(`/customers`)} key={uuid()}>
                  <IgrListItem>
                    <div key={uuid()}>
                      <div className={classes("row-layout group_10")} key={uuid()}>
                        <div className={classes("row-layout group_11")}>
                          <div className={classes("column-layout group_12")}>
                            <p className={classes("typography__overline text_1")}>
                              <span>2024.9.17 17:20</span>
                            </p>
                            <p className={classes("typography__subtitle-2 text_1")}>
                              <span>１件ご成約しました</span>
                            </p>
                            <p className={classes("typography__caption text_1")}>
                              <span>2024.12.22（日）吉岡・大野様（プランナー：田中）</span>
                            </p>
                          </div>
                        </div>
                        <IgrIconButton variant="flat" clicked={() => navigate(`/customers`)} className={classes("icon-button")}>
                          <span className={classes("material-icons icon")} key={uuid()}>
                            <span key={uuid()}>keyboard_arrow_right</span>
                          </span>
                          <IgrRipple key={uuid()}></IgrRipple>
                        </IgrIconButton>
                      </div>
                    </div>
                  </IgrListItem>
                </div>
                <div style={{display: 'contents'}} onClick={() => navigate(`/customers`)} key={uuid()}>
                  <IgrListItem></IgrListItem>
                </div>
              </IgrList>
            </div>
            <div className={classes("column-layout group_8")}>
              <div className={classes("row-layout group_9")}>
                <div className={classes("row-layout group_4")}>
                  <p className={classes("typography__subtitle-2 text")}>
                    <span>今後の予定</span>
                  </p>
                </div>
                <div onClick={() => navigate(`/reservations`)} className={classes("row-layout group_13")}>
                  <a href="" className={classes("typography__body-2 hyperlink")}>
                    <span>View all</span>
                  </a>
                  <span className={classes("material-icons icon_1")}>
                    <span key={uuid()}>arrow_forward</span>
                  </span>
                </div>
              </div>
              <IgrList className={classes("list")}>
                <div style={{display: 'contents'}} onClick={() => navigate(`/reservations`)} key={uuid()}>
                  <IgrListItem>
                    <div key={uuid()}>
                      <div className={classes("row-layout group_10")} key={uuid()}>
                        <div className={classes("row-layout group_11")}>
                          <img src="/src/assets/appt-upcoming.svg" className={classes("image")} />
                          <div className={classes("column-layout group_14")}>
                            <p className={classes("typography__subtitle-2 text_1")}>
                              <span>新郎：田中 涼平様 - 高橋 舞様</span>
                            </p>
                            <p className={classes("typography__caption text_1")}>
                              <span>2024.9.21 10:00am - 3:30pm（桜の間）</span>
                            </p>
                          </div>
                        </div>
                        <IgrIconButton variant="flat" clicked={() => navigate(`/reservations`)} className={classes("icon-button")}>
                          <span className={classes("material-icons icon")} key={uuid()}>
                            <span key={uuid()}>keyboard_arrow_right</span>
                          </span>
                          <IgrRipple key={uuid()}></IgrRipple>
                        </IgrIconButton>
                      </div>
                    </div>
                  </IgrListItem>
                </div>
                <div style={{display: 'contents'}} onClick={() => navigate(`/reservations`)} key={uuid()}>
                  <IgrListItem>
                    <div key={uuid()}>
                      <div className={classes("row-layout group_10")} key={uuid()}>
                        <div className={classes("row-layout group_11")}>
                          <img src="/src/assets/appt-upcoming.svg" className={classes("image")} />
                          <div className={classes("column-layout group_14")}>
                            <p className={classes("typography__subtitle-2 text_1")}>
                              <span>新郎：岡田 和也様 - 新婦：清水 くみ子様</span>
                            </p>
                            <p className={classes("typography__caption text_1")}>
                              <span>2024.9.22 2:00pm - 5:30pm（雲上の間）</span>
                            </p>
                          </div>
                        </div>
                        <IgrIconButton variant="flat" clicked={() => navigate(`/reservations`)} className={classes("icon-button")}>
                          <span className={classes("material-icons icon")} key={uuid()}>
                            <span key={uuid()}>keyboard_arrow_right</span>
                          </span>
                          <IgrRipple key={uuid()}></IgrRipple>
                        </IgrIconButton>
                      </div>
                    </div>
                  </IgrListItem>
                </div>
                <div style={{display: 'contents'}} onClick={() => navigate(`/reservations`)} key={uuid()}>
                  <IgrListItem>
                    <div key={uuid()}>
                      <div className={classes("row-layout group_10")} key={uuid()}>
                        <div className={classes("row-layout group_11")}>
                          <img src="/src/assets/appt-upcoming.svg" className={classes("image")} />
                          <div className={classes("column-layout group_14")}>
                            <p className={classes("typography__subtitle-2 text_1")}>
                              <span>新郎：山田 浩様 - 新婦：斎藤 直子様</span>
                            </p>
                            <p className={classes("typography__caption text_1")}>
                              <span>2024.9.23 10:00am - 3:30pm（桜の間）</span>
                            </p>
                          </div>
                        </div>
                        <IgrIconButton variant="flat" clicked={() => navigate(`/reservations`)} className={classes("icon-button")}>
                          <span className={classes("material-icons icon")} key={uuid()}>
                            <span key={uuid()}>keyboard_arrow_right</span>
                          </span>
                          <IgrRipple key={uuid()}></IgrRipple>
                        </IgrIconButton>
                      </div>
                    </div>
                  </IgrListItem>
                </div>
                <div style={{display: 'contents'}} onClick={() => navigate(`/reservations`)} key={uuid()}>
                  <IgrListItem>
                    <div key={uuid()}>
                      <div className={classes("row-layout group_10")} key={uuid()}>
                        <div className={classes("row-layout group_11")}>
                          <img src="/src/assets/appt-upcoming.svg" className={classes("image")} />
                          <div className={classes("column-layout group_14")}>
                            <p className={classes("typography__subtitle-2 text_1")}>
                              <span>新郎：伊藤 零様 - 新婦：加藤 七夏様</span>
                            </p>
                            <p className={classes("typography__caption text_1")}>
                              <span>2024.9.28 10:00am - 3:30pm（清風の間）</span>
                            </p>
                          </div>
                        </div>
                        <IgrIconButton variant="flat" clicked={() => navigate(`/reservations`)} className={classes("icon-button")}>
                          <span className={classes("material-icons icon")} key={uuid()}>
                            <span key={uuid()}>keyboard_arrow_right</span>
                          </span>
                          <IgrRipple key={uuid()}></IgrRipple>
                        </IgrIconButton>
                      </div>
                    </div>
                  </IgrListItem>
                </div>
              </IgrList>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
