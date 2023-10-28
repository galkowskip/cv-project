
interface ListItem {
    name: string;
    text: string;
    active: boolean;
    id: string;
}

interface GithubProject {
    id: string;
    name: string;
    description: string;
    html_url: string;
    homepage: string;
    language: string;
    stargazers_count: number;
    forks_count: number;
    watchers_count: number;
    open_issues_count: number;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    license: {
        key: string;
        name: string;
        spdx_id: string;
        url: string;
        node_id: string;
    };
    owner: {
        login: string;
        id: number;
        node_id: string;
        avatar_url: string;
        gravatar_id: string;
        url: string;
        html_url: string;
        type: string;
        site_admin: boolean;
    };
}

export type { ListItem, GithubProject };
