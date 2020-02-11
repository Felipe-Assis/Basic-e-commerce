import uuid from "uuid";
import * as dynamoDbLib from "../libs/dynamodb-lib";
import { success, failure } from "../libs/response-lib";

export async function main(event, context, callback) {
    const data = JSON.parse(event.body);
    console.log(event, 'event');
    console.log(data, 'data');
    const params = {
        TableName: 'products',
        Item: {
            productId: uuid.v1(),
            productName: data.productName,
            createdAt: Date.now(),
            userId: event.requestContext.identity.cognitoIdentityId,
        }
    };
    try {
        await dynamoDbLib.call("put", params);
        return success(params.Item);
    } catch (e) {
        console.log("\n\n=======================");
        console.log(e, "ERROR");
        console.log("=======================\n\n");
        return failure({ status: false });
    }
}
