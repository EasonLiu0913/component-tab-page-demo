import React from 'react';

export default function Signup() {
    return (
        <form action="">
            <div>
                <label for="userEmail">email(帳號)</label>
                <input id="userEmail" type="emial" placeholder="請輸入Email" />
            </div>
            <div>
                <label for="userPassword">密碼)</label>
                <input
                    id="userPassword"
                    type="password"
                    placeholder="請輸入密碼"
                />
            </div>
            <div>
                <label for="checkPassword">確認密碼</label>
                <input
                    id="checkPassword"
                    type="password"
                    placeholder="請再次確認密碼"
                />
            </div>

            <div>
                <label for="">生日</label>
                <div class="birthday-input-area">
                    <select id="birthYear">
                        <option value="" disabled selected hidden>
                            我的出生年
                        </option>
                    </select>

                    <select id="birthMonth">
                        <option value="" disabled selected hidden>
                            月份
                        </option>
                    </select>

                    <select id="birthDay">
                        <option value="" disabled selected hidden>
                            日期
                        </option>
                    </select>
                </div>
            </div>

            <div>
                <label for="userMobile">手機號碼</label>
                <input
                    id="userMobile"
                    type="password"
                    placeholder="請輸入手機號碼"
                />
            </div>

            <div class="d-flex">
                <label for="">聯絡地址</label>
                <div class="address-input-area">
                    <div>
                        <select id="city">
                            <option value="" disabled selected hidden>
                                城市
                            </option>
                        </select>

                        <select id="district">
                            <option value="" disabled selected hidden>
                                地區
                            </option>
                        </select>
                    </div>
                    <input type="text" placeholder="請輸入詳細地址" />
                </div>
            </div>

            <div class="form-submit-area">
                <button>重新填寫</button>
                <button class="bg-primary">送出</button>
            </div>
        </form>
    );
}
