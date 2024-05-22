import{M as g}from"./modal-IVpuTcq9.js";import{_ as k,o as i,b as r,d as t,t as c,w as h,v as p,B as C,r as b,F as D,q as N,u as f,g as y}from"./index-Bxyx_9wC.js";const B={props:{product:{type:Object,default(){return{}}},isNew:""},watch:{product(){this.tempProduct=this.product}},data(){return{modal:{},tempProduct:{}}},methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()}},mounted(){this.modal=new g(this.$refs.modal)}},V={class:"modal fade",id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-hidden":"true",ref:"modal"},U={class:"modal-dialog modal-dialog-centered"},F={class:"modal-content"},I={class:"modal-header"},L={class:"modal-title fs-5",id:"staticBackdropLabel"},T={class:"modal-body"},O={class:"form-floating mb-3"},S=t("label",{for:"name"},"名稱",-1),j={class:"form-floating mb-3"},q=t("label",{for:"floatingTextarea2"},"描述",-1),E={class:"form-floating mb-3"},z=t("label",{for:"image"},"照片網址",-1),A={class:"modal-footer"};function G(_,e,a,u,l,d){return i(),r("div",V,[t("div",U,[t("div",F,[t("div",I,[t("h1",L,c(a.isNew?"新增":"編輯"),1),t("button",{onClick:e[0]||(e[0]=(...o)=>d.hideModal&&d.hideModal(...o)),type:"button",class:"btn-close"})]),t("div",T,[t("form",null,[h(t("input",{type:"hidden",name:"id","onUpdate:modelValue":e[1]||(e[1]=o=>l.tempProduct.id=o)},null,512),[[p,l.tempProduct.id]]),t("div",O,[h(t("input",{class:"form-control",type:"text",id:"name",placeholder:"名稱","onUpdate:modelValue":e[2]||(e[2]=o=>l.tempProduct.name=o)},null,512),[[p,l.tempProduct.name]]),S]),t("div",j,[h(t("textarea",{class:"form-control",placeholder:"Leave a comment here",id:"floatingTextarea2","onUpdate:modelValue":e[3]||(e[3]=o=>l.tempProduct.description=o),style:{height:"100px"}},null,512),[[p,l.tempProduct.description]]),q]),t("div",E,[h(t("input",{class:"form-control",type:"text",id:"image",placeholder:"照片網址","onUpdate:modelValue":e[4]||(e[4]=o=>l.tempProduct.image=o)},null,512),[[p,l.tempProduct.image]]),z])])]),t("div",A,[t("button",{onClick:e[5]||(e[5]=(...o)=>d.hideModal&&d.hideModal(...o)),type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 取消 "),t("button",{type:"submit",onClick:e[6]||(e[6]=o=>_.$emit("update-product",l.tempProduct)),class:"btn btn-primary"},c(a.isNew?"新增":"更新"),1)])])])],512)}const H=k(B,[["render",G]]),J={emits:["item-delete"],methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()},deleteCheck(){console.log("傳回ID觸發DEL"),this.$emit("item-delete"),this.hideModal()}},mounted(){this.modal=new g(this.$refs.modal)}},K={class:"modal fade","data-bs-keyboard":"false",tabindex:"-1","aria-hidden":"true",ref:"modal"},Q={class:"modal-dialog modal-dialog-centered"},R={class:"modal-content"},W={class:"modal-header"},X=t("h1",{class:"modal-title fs-5 text-danger"},"確認刪除",-1),Y=t("div",{class:"modal-body"},[t("p",null,"確定要刪除嗎?")],-1),Z={class:"modal-footer"};function tt(_,e,a,u,l,d){return i(),r("div",K,[t("div",Q,[t("div",R,[t("div",W,[X,t("button",{onClick:e[0]||(e[0]=(...o)=>d.hideModal&&d.hideModal(...o)),type:"button",class:"btn-close"})]),Y,t("div",Z,[t("button",{type:"button",onClick:e[1]||(e[1]=(...o)=>d.hideModal&&d.hideModal(...o)),class:"btn btn-secondary"},"取消"),t("button",{type:"submit",onClick:e[2]||(e[2]=o=>d.deleteCheck()),class:"btn btn-danger"},"確定")])])])],512)}const et=k(J,[["render",tt]]),ot={class:"container-lg"},dt={class:"text-end mt-5 mb-4"},lt={class:"table table-hover"},st=t("thead",null,[t("tr",null,[t("th",{width:"10%",scope:"col-md-1"},"#"),t("th",{width:"20%",scope:"col-md-4"},"植物中文"),t("th",{width:"50%",scope:"col-md-4"},"植物描述"),t("th",{width:"20%",scope:"col-md-3"},"功能")])],-1),at={scope:"row"},nt=["onClick"],it=["onClick"],ut={__name:"CreateView",setup(_){const e=C(),a=b(null),u=b(null);let l=b(!1),d=b({}),o="";function v(s,m){s===!0?d.value={}:d.value={...m},l.value=s,a.value.showModal()}function w(s){l.value==!0?(d.value=s,e.addData(d.value)):(console.log("更新模式"),e.editData(s,s.id)),a.value.hideModal()}function P(s){o=s,u.value.showModal()}function x(){e.deletData(o)}return(s,m)=>(i(),r("div",ot,[t("div",dt,[t("button",{class:"btn btn-primary",type:"button",onClick:m[0]||(m[0]=n=>v(!0))}," 新增項目 ")]),t("table",lt,[st,t("tbody",null,[(i(!0),r(D,null,N(f(e).products,(n,M)=>(i(),r("tr",{class:"table align-middle",key:M+1},[t("th",at,c(M+1),1),t("td",null,c(n.name),1),t("td",null,c(n.description),1),t("td",null,[t("button",{class:"btn btn-outline-primary m-1",onClick:$=>v(!1,n)},"編輯",8,nt),t("button",{class:"btn btn-outline-danger",onClick:$=>P(n.id)},"刪除",8,it)])]))),128))])]),y(H,{ref_key:"productModal",ref:a,product:f(d),isNew:f(l),onUpdateProduct:w},null,8,["product","isNew"]),y(et,{ref_key:"itemModalDel",ref:u,onItemDelete:x},null,512)]))}};export{ut as default};