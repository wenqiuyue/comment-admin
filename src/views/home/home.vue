<template>
  <div class="home">
    <div class="statement">
      <h3>免责声明</h3>
      <p v-for="(item,index) in statements" :key="index">{{item}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      statements:[
        '任何使用FICHAT平台相应产品的用户均应仔细阅读本声明:',
        '1、用户可选择不使用本产品，用户使用本产品的行为将被视为对本声明全部内容的认可。',
        '2、除FICHAT平台注明之服务条款外，其他一切因使用FICHAT平台产品而引致之任何意外、疏忽、合约毁坏、诽谤、版权或知识产权侵犯及其所造成的损失，FICHAT平台概不负责，亦不承担任何法律责任。',
        '3、用户对使用FICHAT平台产品自行承担风险，FICHAT平台不做任何形式的保证, 不保证结果满足用户的要求，不保证服务不中断，对结果的安全性、正确性、及时性、合法性均不做担保。',
        '4、因网络状况、通讯线路等任何技术原因而导致用户不能正常使用，FICHAT平台不承担任何法律责任。',
        '5、FICHAT平台尊重并保护所有使用用户的个人隐私权，使用过程中涉及的用户名、手机号码、电子邮件地址、电子邮件内容、Cookie等个人资料，非经用户亲自许可或根据相关法律的强制性规定，FICHAT平台绝对不会主动地泄露给第三方。',
        '6、任何企业或个人认为通过FICHAT平台所提供的内容可能涉嫌侵犯其合法权益，应该及时向FICHAT平台书面反馈，并提供身份证明、权属证明及详细侵权情况证明，我们在收到上述法律文件后，将会尽快移除被控侵权内容。',
        '7、FICHAT平台不提供任何VPN上网服务和任何违反中国法律法规的服务。',
        '8、FICHAT平台只提供给正规企业作为客服智能便捷聊天及互联网推广服务使用。',
        '9、使用FICHAT平台的企业不得从事任何违反相关法律法规,否则一切后果与平台无关。',
        '10、使用FICHAT平台必须同意以上约定，FICHAT平台一经发现违规企业立刻关停对应账号。'
      ]
    }
  },
}
</script>
<style lang="less" scoped>
.home{
  padding: 10px 30px 10px 30px;
  height: calc(100% - 20px);
  .statement{
    h3{
      font-size: 20px;
      margin: 20px 0 30px;
    }
    p{
      color: #666;
      line-height: 26px;
      font-size: 14px;
      margin: 20px 0;
    }
  }
}
</style>