import { type RouteConfig, index, route, prefix, layout } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route('/about', 'routes/about.tsx'),
    ...prefix('/freelance-projects', [
        index('routes/work/freelance-projects/index.tsx'),
        route('/zarban', 'routes/work/freelance-projects/zarban.tsx'),
        route('/:projectName', 'routes/work/freelance-projects/other.tsx')
    ])
    // route('/freelance', 'routes/work/freelance-projects/index.tsx'),
    // route('/freelance/zarban', 'routes/work/freelance-projects/zarban.tsx')
] satisfies RouteConfig;
