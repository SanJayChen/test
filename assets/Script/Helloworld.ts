const { ccclass, property } = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Node)
    img: cc.Node = null;

    // @property(cc.Prefab)
    // pre: cc.Prefab = null;

    setAni(){
        this.img.active = true
        let ani = this.img.getComponent(cc.Animation)

        ani.play()
    }


    setAni2(){
        let ani = this.img.getComponent(cc.Animation)
        ani.stop()
        this.img.active = false
        //ani.play()
    }

    setStr(){
        // let  url = "http://192.168.10.56:8084/fish/login?username=222222&channel=fb&timestamp=1626356138&ip=127.0.0.1&sign=d3b2fe4526350ecb0ba319742e027920";
        // let pos = url.indexOf('?')
        // let str:string ='10.123'


        let data={
            // username:undefined,
            // channel:undefined,
            // timestamp:undefined,
            // ip:undefined,
            // sign:undefined,

        }

        // let newStr = url.substring(pos+1)
        // let strArry = newStr.split('&')
        // for(let i = 0; i<strArry.length;i++){
        //     let arr = strArry[i].split('=')
        //     let key = arr[0]
        //     data[key] = arr[1]
        // }

        // cc.log('data+++++++++',JSON.stringify(data))

    }


    start() {


        // ws.onopen = function (event) {
           
        //     cc.log('onopen-------------')
        // };
        // this.setStr()
        // let arr = this.node.childrenCount 
        // cc.log('arr+++++',arr)

        // let obj = this.node.getChildByName("New Label");
        // cc.log('obj',obj.name)

    //    let obj = cc.find("New Sprite/dd",this.node)
    //    cc.log('obj',obj.name)

        // cc.assetManager.loadBundle('img', (err, bundle) => {
         
        //    bundle.load('Tex_pt_jnp_01',cc.SpriteFrame,(err,frame: cc.SpriteFrame) =>{
        //        cc.log(frame.name,"spriteFrame++++++++")
        //         this.img.spriteFrame = frame
        //    });

        //    bundle.load('label',cc.Prefab,(err,prefab: cc.Prefab) =>{
           
        //     let obj =  cc.instantiate(prefab)
        //     obj.setParent(this.node)
        // });
         
        // });


        // cc.assetManager.loadBundle("MyBundle", (err: Error, bundle: cc.AssetManager.Bundle) => {
        //     bundle.load("HelloWorld", cc.SpriteFrame, (err, assets: cc.SpriteFrame) => {
        //           this.sprite.spriteFrame = assets;
        //     });
        // });


        //this.img.spriteFrame = this.atlas.getSpriteFrame("btn_xiexia")
        // let num = 1;
        // let path: string = `${"img/test/deposit"}${num}`;

        // cc.loader.loadRes(path, cc.SpriteFrame, (err, spriteFrame) => {
        //     cc.log(spriteFrame.name,"spriteFrame++++++++")
        //     this.img.spriteFrame = spriteFrame
        // })

        // cc.loader.loadRes("pre/label", cc.Prefab, (err, pre) => {
        //     let obj = cc.instantiate(pre)
        //     obj.setParent(this.node)
        //     cc.log(obj.name, 'obj++++++++++++')　
        // });


        //  this.img.spriteFrame = this.spriteFrame//this.atlas.getSpriteFrame("deposit")
        //cc.log(this.atlas.getSpriteFrame("deposit"),'start+++++++++++start')
    }
}
