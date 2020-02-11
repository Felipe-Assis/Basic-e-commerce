import * as dynamoDbLib from "../libs/dynamodb-lib";
import { success, failure } from "../libs/response-lib";
export async function main(event, context) {
    // 'Key' defines the partition key and sort key of the item to be retrieved
    // - 'userId': Identity Pool identity id of the authenticated user
    // - 'noteId': path parameter
    const params = {
        TableName: process.env.tableName,
        ExpressionAttributeValues: { ':s': 0 },
        ProjectionExpression: 'productId, productName, stockAvailable',
        FilterExpression: 'stockAvailable > :s',
    };
    try {
        const result = await dynamoDbLib.call("scan", params);
        if (result.Item || result.Items) {
            return success(result.Item || result.Items);
        } else {
            // console.log(result);
            return failure({ status: false, error: "Item not found." });
            }
        } catch (e) {
            // console.log(e);
            return failure({ status: false });
        }
    }
