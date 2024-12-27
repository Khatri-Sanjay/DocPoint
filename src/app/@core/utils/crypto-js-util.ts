import CryptoJS from 'crypto-js';
import {environment} from '../../../environments/environment';

export class CryptoJsUtil {

  /**
   * Utility class for handling encryption and decryption using CryptoJS.
   *
   * @author Sanjay Khatri
   * @date 10-08-2024
   * @time 03:58 PM
   */

  /**
   * @param data An input to encrypt.
   * */
  public static encrypt(data: any): string {
    return CryptoJS.AES.encrypt(data, environment.LOCAL_STORAGE_KEY).toString();
  }

  /**
   * @param data An encrypted stream of data or object.
   * */
  public static decrypt(data: any): string {
    return CryptoJS.AES.decrypt(data, environment.LOCAL_STORAGE_KEY).toString(CryptoJS.enc.Utf8);
  }
}
