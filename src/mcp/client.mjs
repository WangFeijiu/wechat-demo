// client.mjs
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { ListToolsRequestSchema, CallToolRequestSchema } from "@modelcontextprotocol/sdk/types.js";

async function main() {
    // 1. 创建 stdio transport（启动你的 MCP Server）
    const transport = new StdioClientTransport({
        command: "cmd",
        args: ["/c", "d:/codes/wechat-demo/src/mcp/run-server.cmd"], // 使用绝对路径启动 MCP 服务器
        cwd: "d:/codes/wechat-demo", // 设置工作目录为当前项目，使服务器工具能正确扫描文件
    });

    // 2. 创建 Client
    const client = new Client(
        {
            name: "local-mcp-client",
            version: "0.0.1",
        },
        {
            capabilities: {},
        }
    );

    // 3. 连接
    await client.connect(transport);
    console.log("✅ MCP connected");

    // 4. ListTools
    const tools = await client.request(ListToolsRequestSchema, {});
    console.log("🧰 tools:", tools);

    // 5. 调用 scanProject
    const scan = await client.request(CallToolRequestSchema, {
        name: "scanProject",
        arguments: {},
    });
    console.log("📂 scanProject:", scan);

    // 6. 调用 transformI18n
    const transform = await client.request(CallToolRequestSchema, {
        name: "transformI18n",
        arguments: {
            file: "src/App.tsx",
            dryRun: true,
        },
    });
    console.log("🌍 transformI18n:", transform);

    // 7. 关闭 client
    await client.close();
}

main().catch(console.error);
