import BaseModel from '~shared/api.network.v1/BaseModel'
import { prop } from 'datx'
import { PaymentMethodId } from '~shared/data'
import { apiUrl } from '~shared/api.network.v1/util'

export class CreatePaymentMethod extends BaseModel {
  public static type = 'payment_methods'

  public static endpoint = apiUrl('payment_methods')

  @prop.identifier
  public id: PaymentMethodId

  @prop
  public stripe_card_token: string

  @prop
  public organization_id: number

  @prop
  public name: string

  @prop
  public exp_month: number

  @prop
  public exp_year: number

  @prop
  public address_zip: string

  @prop
  public address_country: string

  @prop
  public default: boolean

  constructor(
    stripe_card_token: string,
    name: string,
    exp_month: number,
    exp_year: number,
    address_zip: string,
    address_country: string,
    isDefault: boolean
  ) {
    super()
    this.stripe_card_token = stripe_card_token
    this.name = name
    this.exp_month = exp_month
    this.exp_year = exp_year
    this.address_zip = address_zip
    this.address_country = address_country
    this.default = isDefault
  }
}
