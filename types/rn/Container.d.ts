declare namespace EM {
    namespace RN {
        /** 设备信息 */
        interface DeviceInfo {
            uniqueId: string //	混淆设备 ID,主要通行证使用	7.9
            imei: string //	设备 IMEI (iOS 无法获取, Android 可能为空)	7.9
            macAddress: string //	设备 MAC 地址	7.9
            phoneNumber: string //	本机号码 (iOS 无法获取, Android 可能为空)	7.9
            network: string //	当前网络类型	7.9
            androidosv: string //	Android 系统版本，8.7弃用，获取版本使用osv	7.9
            euid: string //	和大数据约定，后面各个业务主要使用id	8.3
            instanceId: string //	客户端随机生成的id，android独有	8.3
            emAndroidId: string //	MD5(ANDROID_ID_PREFIX + androidId)，android独有	8.3
            oaId: string //	oaid，android独有	9.3
            advChnYzj: string //	预装标识，android独有	9.3
            idfv: string //	ios设备唯一标识，iOS独有	8.3
            idfa: string //	iOS广告唯一标识，iOS独有	8.3
            imsi: string //	设备 IMSI	8.4
            osv: string //	系统版本号	8.7
            carrier: string //	运营商	8.7
            model: string //	设备型号	8.7
        }

        interface Passport {
            emct?: string,
            emut?: string,
            emuid?: string,

            ct?: string,
            ut?: string,
            uid?: string,
            nickname?: string,
            pi?: string,
            has_bindphone?: string,
            umobphone?: string,
        }
    }
}

