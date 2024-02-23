import { base } from "../base";

export interface PurchaseOrder extends base {
    purchaseOrderId: number;
    orderNo: string;
    orderDate: Date;
    expectedDate: Date;
    status:string;
    supplierId:number;
    deliveryBranchId: number;
    requestedBy:string;
    requiredFor:string;
    referenceNo:string;
    notes:string;
    taxAmount:number;
    discountAmount:number;
    transportCharges:number;
    subTotalAmount:number;
    totalAmount:number;
    purchaseOrderItems: PurchaseOrderItems[]
}

export interface PurchaseOrderItems{
    purchaseOrderId: number;
    purchaseOrderItemId: number;
    stockItemId:number;
    qty:number;
    unitCost:number;
    totalAmount:number;
    itemNotes:string;
    itemStatus:string;
    receivedQty: string;
    itemName:string;
    itemAttributes:string;
    stockTypeCd:string;
    materialId:number;
    materialName:string;
}

