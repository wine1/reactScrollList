

declare namespace EM {
    namespace RN {
        /** 用户信息 */
        interface UserInfo {
            mpi: string //老通行证 MobilePI	7.9
            cToken: string //CToken	7.9
            uToken: string //UToken	7.9
            uid: string //用户 Id (唯一)	7.9
            cid: string //加密的 UID	7.9
            c1: string //cookie1	7.9
            c2: string //cookie2	7.9
            isNonRealNameUser: boolean //是否非实名制用户 (true 表示不是实名用户; false 为实名用户...)	7.9
            nickname: string //昵称	7.9
            uName: string //用户名	7.9
            uGender: string //用户性别:0，未知 1，男 2，女	7.9
            uIntroduce: string //用户简介	7.9
            uMobPhone: string //加密手机号	7.9
            uMobPhoneActed: string //是否激活手机	7.9
            uProvince: string //省信息	7.9
            uCity: string //市信息	7.9
            sso: string //sso	7.9
            influStar: string //用户影响力星级	7.9
            influVal: string //影响力分数	7.9
            banned: string //是否禁言: 0 正常用户; 1 禁言	7.9
            bannedMsg: string //禁言提示信息，正常用户空	7.9
            hasFund: boolean //是否绑定基金	7.9
            hasSecurities: boolean //是否绑定证券	7.9
            hasHuawei: boolean //是否绑定华为	7.9
            hasJinRiTouTiao: boolean //是否绑定今日头条	7.9
            hasQQ: boolean //是否绑定 QQ	7.9
            hasSina: boolean //是否绑定新浪	7.9
            hasTaoBao: boolean //是否绑定淘宝	7.9
            hasWeixin: boolean //是否绑定微信	7.9
            hasZaker: boolean //是否绑定 Zaker	7.9
            vFlag: boolean //是否加 V	7.9
            vTitle: string //加 V 用户的认证说明	7.9
            vType: string //加 V 类型 (空: 未加 V; 301: 个人 - 理财师; 302: 个人 - 普通个人; 303: 官方 - 企业官方)	7.9
            vTypeStatus: string //加 V 状态 (空: 未认证; 0: 审核通过 (加V); 1: 审核未通过; 2: 审核中; 3: 加V用户修改审核 (加 V); 8: 用户取消加 V; 9: 管理员取消加 V)	7.9
            bizAvailFlag1: string //用户类型 (0: 普通; 1: Choice; 2: 财富号)	7.9
            bizAvailFlag2: string //用户类型 (0: Unknown; 1: 开通天天基金; 2: 开通 A 股; 4: 开通港美股; 8: 开通信用帐户)	7.9
            secBindStatus: string //证券绑定状态 (0: 未绑定; 1: A股; 2: 港美股)	7.9
            level2Permission: boolean //沪深level2	8.4
            level2HKPermission: boolean //港股level2	8.4
            masterPermission: boolean //投资大师	8.4
            decisionPermission: boolean //决策版本	8.4
            dkPermission: boolean //dk权限	8.4
            isLoginHSTrade: boolean //是否沪深登录	8.4
            isLoginGMTrade: boolean //是否港美登录
        }
    }
}

