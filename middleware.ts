import {withAuth} from "@kinde-oss/kinde-auth-nextjs/middleware";
import {NextRequest} from "next/server";

export default withAuth(
    async function (request: NextRequest) {
        console.log(request);
    }, {
        isReturnToCurrentPage: true,
    }
)

export const config = {
    matcher: [
        '/dashboard',

        //Match all request paths except for the ones starting with:
        //'/((?!api|_next/static|_next/image|auth|favicon.ico|robots.txt|images|login|$).*)',
    ]
}