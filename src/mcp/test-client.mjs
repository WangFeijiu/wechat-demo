import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";

async function main() {
    console.log("Starting MCP Client...");

    const transport = new StdioClientTransport({
        command: "cmd",
        args: ["/c", "d:/codes/wechat-demo/src/mcp/run-server.cmd"],
        cwd: "d:/codes/wechat-demo",
    });

    console.log("Creating client...");
    const client = new Client(
        {
            name: "local-mcp-client",
            version: "0.0.1",
        },
        {
            capabilities: {},
        }
    );

    console.log("Connecting...");
    await client.connect(transport);
    console.log("✅ MCP connected");

    console.log("Calling ListTools...");
    const tools = await client.request(ListToolsRequestSchema, {});
    console.log("🧰 tools:", tools);

    console.log("Closing client...");
    await client.close();
    console.log("✅ Client closed");
}

main().catch(console.error);
